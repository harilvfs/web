document.addEventListener('DOMContentLoaded', function() {
    const markdownScript = document.createElement('script');
    markdownScript.src = 'https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js';
    document.head.appendChild(markdownScript);
    
    const frontMatterScript = document.createElement('script');
    frontMatterScript.src = 'https://cdn.jsdelivr.net/npm/front-matter@4.0.2/dist/front-matter.min.js';
    document.head.appendChild(frontMatterScript);
    
    markdownScript.onload = function() {
        window.md = window.markdownit({
            html: true,
            linkify: true,
            typographer: true
        });
        
        console.log("Markdown library loaded successfully");
        initBlogFunctionality();
    };
    
    const highlightCss = document.createElement('link');
    highlightCss.rel = 'stylesheet';
    highlightCss.href = 'https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/styles/github-dark.min.css';
    document.head.appendChild(highlightCss);
    
    const highlightScript = document.createElement('script');
    highlightScript.src = 'https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/lib/highlight.min.js';
    document.head.appendChild(highlightScript);
    
    highlightScript.onload = function() {
        console.log("Highlight.js loaded successfully");
        if (window.md) {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        }
    };
});

function initBlogFunctionality() {
    console.log("Initializing blog functionality");
    
    const blogEditor = document.getElementById('blogEditor');
    const blogList = document.getElementById('blogList');
    const blogPostView = document.getElementById('blogPostView');
    const blogSearch = document.getElementById('blogSearch');
    const saveBlogBtn = document.getElementById('saveBlogBtn');
    const cancelBlogBtn = document.getElementById('cancelBlogBtn');
    const blogTitle = document.getElementById('blogTitle');
    const blogContent = document.getElementById('blogContent');
    const blogTags = document.getElementById('blogTags');
    const markdownPreview = document.getElementById('markdown-preview');
    const blogPostContent = document.getElementById('blogPostContent');
    const blogPostTags = document.getElementById('blogPostTags');
    const blogPostDate = document.getElementById('blogPostDate');
    const blogViewTitle = document.getElementById('blogViewTitle');
    const editBlogBtn = document.getElementById('editBlogBtn');
    const deleteBlogBtn = document.getElementById('deleteBlogBtn');
    const backToBlogsBtn = document.getElementById('backToBlogsBtn');
    const closeBlogView = document.getElementById('closeBlogView');
    
    if (editBlogBtn) editBlogBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
    if (deleteBlogBtn) deleteBlogBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete';
    if (backToBlogsBtn) backToBlogsBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
    
    const STORAGE_KEY = 'public_blog_posts';
    
    let currentBlogId = null;
    
    window.repoBlogs = [];
    
    loadBlogs();
    
    if (saveBlogBtn) {
        saveBlogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveBlog();
            
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
        });
    }
    
    if (cancelBlogBtn) {
        cancelBlogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
            
            closeBlogEditor();
        });
    }
    
    if (blogContent) {
        blogContent.addEventListener('input', function() {
            console.log("Content changed, updating preview");
            previewMarkdown();
        });
        
        blogContent.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight + 2) + 'px';
        });
    }
    
    if (blogSearch) {
        blogSearch.addEventListener('input', searchBlogs);
    }
    
    if (editBlogBtn) {
        editBlogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
            
            editCurrentBlog();
        });
    }
    
    if (deleteBlogBtn) {
        deleteBlogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
            
            deleteCurrentBlog();
        });
    }
    
    if (backToBlogsBtn) {
        backToBlogsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
            
            closePostView();
        });
    }
    
    if (closeBlogView) {
        closeBlogView.addEventListener('click', closePostView);
    }
    
    function openBlogEditor(blogData = null) {
        console.log("Opening blog editor", blogData ? "with existing data" : "for new post");
        
        if (blogData) {
            blogTitle.value = blogData.title;
            blogContent.value = blogData.content;
            blogTags.value = blogData.tags.join(', ');
            currentBlogId = blogData.id;
            previewMarkdown();
        } else {
            blogTitle.value = '';
            blogContent.value = '';
            blogTags.value = '';
            currentBlogId = null;
            markdownPreview.innerHTML = '';
        }
        
        if (blogContent) {
            setTimeout(() => {
                blogContent.style.height = 'auto';
                blogContent.style.height = (blogContent.scrollHeight + 2) + 'px';
            }, 100);
        }
        
        blogEditor.style.display = 'block';
        blogList.style.display = 'none';
        blogPostView.style.display = 'none';
    }
    
    function closeBlogEditor() {
        console.log("Closing blog editor");
        blogEditor.style.display = 'none';
        blogList.style.display = 'block';
        currentBlogId = null;
    }
    
    function previewMarkdown() {
        console.log("Generating markdown preview");
        
        if (window.md && blogContent.value) {
            try {
                const renderedHTML = window.md.render(blogContent.value);
                markdownPreview.innerHTML = renderedHTML;
                console.log("Preview generated successfully");
                
                if (window.hljs) {
                    document.querySelectorAll('pre code').forEach((block) => {
                        window.hljs.highlightBlock(block);
                    });
                }
            } catch (error) {
                console.error("Error rendering markdown:", error);
                markdownPreview.innerHTML = '<p class="error">Error rendering markdown: ' + error.message + '</p>';
            }
        } else {
            console.log("No content to preview or markdown library not loaded");
            markdownPreview.innerHTML = '';
        }
    }
    
    function saveBlog() {
        console.log("Saving blog post");
        
        if (!blogTitle.value.trim()) {
            showToast('Please enter a blog title', 'error');
            blogTitle.classList.add('error-input');
            setTimeout(() => blogTitle.classList.remove('error-input'), 1000);
            return;
        }
        
        if (!blogContent.value.trim()) {
            showToast('Please enter some blog content', 'error');
            blogContent.classList.add('error-input');
            setTimeout(() => blogContent.classList.remove('error-input'), 1000);
            return;
        }
        
        const tagsArray = blogTags.value.split(',')
            .map(tag => tag.trim())
            .filter(tag => tag !== '');
            
        const now = new Date();
        
        const blogPost = {
            id: currentBlogId || 'blog_' + now.getTime(),
            title: blogTitle.value.trim(),
            content: blogContent.value.trim(),
            tags: tagsArray,
            created: now.toISOString(),
            author: localStorage.getItem('blog_author_name') || 'Anonymous'
        };
        
        let blogs = getBlogsFromStorage();
        
        if (currentBlogId) {
            const index = blogs.findIndex(blog => blog.id === currentBlogId);
            if (index !== -1) {
                blogPost.created = blogs[index].created;
                blogPost.updated = now.toISOString();
                blogs[index] = blogPost;
            }
        } else {
            blogs.unshift(blogPost);
        }
        
        saveBlogsToStorage(blogs);
        
        closeBlogEditor();
        
        loadBlogs();
        
        showToast('Blog post saved successfully!', 'success');
    }
    
    function loadBlogs() {
        console.log("Loading blogs from repository");
        
        if (blogList) {
            blogList.innerHTML = `
                <div class="loading-blogs">
                    <p><i class="fas fa-spinner fa-spin"></i> Loading blog posts from repository...</p>
                </div>
            `;
        }
        
        loadRepositoryBlogs()
            .then(repoBlogs => {
                repoBlogs.sort((a, b) => new Date(b.created) - new Date(a.created));
                
                renderBlogs(repoBlogs);
            })
            .catch(error => {
                console.error("Error loading repository blogs:", error);
                renderBlogs([]);
            });
    }
    
    function loadRepositoryBlogs() {
        return new Promise((resolve, reject) => {
            fetch('/blog-posts/')
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Could not access blog-posts directory");
                    }
                    return response.text();
                })
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const links = Array.from(doc.querySelectorAll('a'));
                    
                    const mdFiles = links
                        .map(link => link.getAttribute('href'))
                        .filter(href => href && href.endsWith('.md'));
                    
                    if (mdFiles.length === 0) {
                        window.repoBlogs = [];
                        resolve([]);
                        return;
                    }
                    
                    Promise.all(mdFiles.map(file => 
                        fetch(`/blog-posts/${file}`)
                            .then(response => response.text())
                            .then(content => {
                                let metadata = {};
                                let markdown = content;
                                
                                try {
                                    if (window.frontMatter) {
                                        const parsed = window.frontMatter(content);
                                        metadata = parsed.attributes;
                                        markdown = parsed.body;
                                    } else {
                                        const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
                                        if (match) {
                                            const yamlStr = match[1];
                                            markdown = match[2];
                                            
                                            yamlStr.split('\n').forEach(line => {
                                                const parts = line.split(':');
                                                if (parts.length >= 2) {
                                                    const key = parts[0].trim();
                                                    const value = parts.slice(1).join(':').trim();
                                                    
                                                    if (key === 'tags') {
                                                        metadata[key] = value.split(',').map(tag => tag.trim());
                                                    } else {
                                                        metadata[key] = value;
                                                    }
                                                }
                                            });
                                        }
                                    }
                                } catch (error) {
                                    console.warn("Error parsing front matter:", error);
                                }
                                
                                return {
                                    id: file.replace('.md', ''),
                                    title: metadata.title || file.replace('.md', ''),
                                    content: markdown,
                                    tags: metadata.tags || [],
                                    created: metadata.date || new Date().toISOString(),
                                    author: metadata.author || 'Anonymous',
                                    fromRepo: true,
                                    filePath: file
                                };
                            })
                    ))
                    .then(blogs => {
                        const validBlogs = blogs.filter(blog => blog);
                        window.repoBlogs = validBlogs;
                        resolve(validBlogs);
                    })
                    .catch(error => {
                        console.error("Error loading markdown files:", error);
                        window.repoBlogs = [];
                        resolve([]);
                    });
                })
                .catch(error => {
                    console.warn("Could not load blog posts from repository:", error);
                    window.repoBlogs = [];
                    resolve([]);
                });
        });
    }
    
    function renderBlogs(blogs) {
        if (blogList) {
            if (blogs.length === 0) {
                blogList.innerHTML = `
                    <div class="empty-blogs">
                        <p>No blog posts available in the repository.</p>
                    </div>
                `;
            } else {
                blogList.innerHTML = '';
                blogs.forEach((blog, index) => {
                    const blogCard = createBlogCard(blog, index);
                    blogList.appendChild(blogCard);
                });
            }
        }
    }
    
    function createBlogCard(blog, index) {
        let excerpt = blog.content;
        
        excerpt = excerpt.replace(/```[\s\S]*?```/g, '[Code Block]');
        excerpt = excerpt.replace(/#+\s+(.*)/g, '$1');
        excerpt = excerpt.replace(/\[(.*?)\]\(.*?\)/g, '$1');
        excerpt = excerpt.replace(/!\[(.*?)\]\(.*?\)/g, '[Image: $1]');
        
        excerpt = excerpt.length > 150 ? excerpt.substring(0, 150) + '...' : excerpt;
        
        const card = document.createElement('div');
        card.className = 'blog-card';
        
        if (blog.fromRepo) {
            card.classList.add('repo-blog');
        }
        
        card.style.animationDelay = `${index * 0.1}s`;
        
        let tagHtml = '';
        if (blog.tags && blog.tags.length > 0) {
            tagHtml = blog.tags.map((tag, i) => 
                `<span class="blog-tag" style="--tag-index: ${i}">${escapeHtml(tag)}</span>`
            ).join('');
        }
        
        const authorHtml = blog.author ? 
            `<div class="blog-card-author"><i class="fas fa-user-edit"></i> ${escapeHtml(blog.author)}</div>` : '';
        
        const sourceHtml = blog.fromRepo ? 
            `<div class="blog-card-source"><i class="fas fa-code-branch"></i> From Repository</div>` : '';
        
        card.innerHTML = `
            <div class="blog-header">
                <h3 class="blog-title">${escapeHtml(blog.title)}</h3>
                <p class="blog-excerpt">${escapeHtml(excerpt)}</p>
                <div class="blog-meta">
                    <div class="blog-tags">
                        ${tagHtml}
                    </div>
                    <div class="blog-date">${formatDate(blog.created)}</div>
                </div>
                ${authorHtml}
                ${sourceHtml}
            </div>
        `;
        
        card.addEventListener('click', () => {
            console.log("Blog card clicked, opening post view");
            card.classList.add('card-clicked');
            setTimeout(() => {
                card.classList.remove('card-clicked');
                openBlogPost(blog);
            }, 200);
        });
        
        return card;
    }
    
    function openBlogPost(blog) {
        if (blogPostView && blogPostContent && blogPostTags && blogPostDate) {
            console.log("Opening blog post:", blog.title);
            currentBlogId = blog.id;
            
            if (window.md) {
                try {
                    const readingTime = calculateReadingTime(blog.content);
                    
                    blogPostContent.innerHTML = window.md.render(blog.content);
                    
                    const readingTimeElement = document.createElement('div');
                    readingTimeElement.className = 'reading-time';
                    readingTimeElement.innerHTML = `<i class="far fa-clock"></i> ${readingTime} min read`;
                    blogPostContent.insertBefore(readingTimeElement, blogPostContent.firstChild);
                    
                    if (blog.fromRepo) {
                        const sourceElement = document.createElement('div');
                        sourceElement.className = 'blog-source';
                        sourceElement.innerHTML = `<i class="fas fa-code-branch"></i> This post is from the repository`;
                        blogPostContent.insertBefore(sourceElement, blogPostContent.firstChild);
                    }
                    
                    if (blog.author) {
                        const authorElement = document.createElement('div');
                        authorElement.className = 'blog-author';
                        authorElement.innerHTML = `<i class="fas fa-user-edit"></i> Posted by ${escapeHtml(blog.author)}`;
                        blogPostContent.insertBefore(authorElement, blogPostContent.firstChild);
                    }
                    
                } catch (error) {
                    console.error("Error rendering markdown in post view:", error);
                    blogPostContent.innerHTML = '<p class="error">Error rendering content. Please check the markdown syntax.</p>' + 
                                                '<pre>' + escapeHtml(blog.content) + '</pre>';
                }
            } else {
                blogPostContent.textContent = blog.content;
            }
            
            if (blog.tags && blog.tags.length > 0) {
                blogPostTags.innerHTML = blog.tags.map((tag, i) => 
                    `<span class="blog-tag" style="--tag-index: ${i}">${escapeHtml(tag)}</span>`
                ).join('');
            } else {
                blogPostTags.innerHTML = '';
            }
            
            blogPostDate.textContent = formatDate(blog.created);
            
            if (blogViewTitle) {
                blogViewTitle.textContent = `hari@archlinux: ~/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`;
            }
            
            if (window.hljs) {
                document.querySelectorAll('pre code').forEach((block) => {
                    try {
                        window.hljs.highlightBlock(block);
                    } catch (error) {
                        console.error("Error applying syntax highlighting:", error);
                    }
                });
            }
            
            if (editBlogBtn) editBlogBtn.style.display = 'none';
            if (deleteBlogBtn) deleteBlogBtn.style.display = 'none';
            
            blogPostView.style.display = 'block';
            blogList.style.display = 'none';
            blogEditor.style.display = 'none';
            
            if (backToBlogsBtn) {
                backToBlogsBtn.style.display = 'inline-flex';
            }
        }
    }
    
    function closePostView() {
        console.log("Closing post view");
        blogPostView.style.display = 'none';
        blogList.style.display = 'block';
        currentBlogId = null;
        
        if (backToBlogsBtn) {
            backToBlogsBtn.style.display = 'none';
        }
    }
    
    function editCurrentBlog() {
        if (!currentBlogId) return;
        
        console.log("Editing blog post with ID:", currentBlogId);
        const blogs = getBlogsFromStorage();
        const blog = blogs.find(blog => blog.id === currentBlogId);
        
        if (blog) {
            openBlogEditor(blog);
        }
    }
    
    function deleteCurrentBlog() {
        if (!currentBlogId) return;
        
        console.log("Deleting blog post with ID:", currentBlogId);
        
        const confirmModal = document.createElement('div');
        confirmModal.className = 'confirm-modal';
        confirmModal.innerHTML = `
            <div class="confirm-content">
                <div class="confirm-header">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Confirm Deletion</h3>
                </div>
                <p>Are you sure you want to delete this blog post? This action cannot be undone.</p>
                <div class="confirm-actions">
                    <button id="confirmDelete" class="btn-3d delete"><i class="fas fa-trash-alt"></i> Delete</button>
                    <button id="cancelDelete" class="btn-3d cancel"><i class="fas fa-times"></i> Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(confirmModal);
        
        setTimeout(() => {
            confirmModal.classList.add('show');
        }, 10);
        
        document.getElementById('confirmDelete').addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.add('clicked');
            
            let blogs = getBlogsFromStorage();
            blogs = blogs.filter(blog => blog.id !== currentBlogId);
            saveBlogsToStorage(blogs);
            
            confirmModal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(confirmModal);
            }, 300);
            
            closePostView();
            loadBlogs();
            
            showToast('Blog post deleted successfully!', 'success');
        });
        
        document.getElementById('cancelDelete').addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.add('clicked');
            
            confirmModal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(confirmModal);
            }, 300);
        });
        
        confirmModal.addEventListener('click', function(e) {
            if (e.target === confirmModal) {
                confirmModal.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(confirmModal);
                }, 300);
            }
        });
    }
    
    function searchBlogs() {
        const searchTerm = blogSearch.value.trim().toLowerCase();
        console.log("Searching blogs for:", searchTerm);
        
        const repoBlogs = window.repoBlogs || [];
        
        if (!searchTerm) {
            renderBlogs(repoBlogs);
            return;
        }
        
        const filteredBlogs = repoBlogs.filter(blog => 
            blog.title.toLowerCase().includes(searchTerm) ||
            blog.content.toLowerCase().includes(searchTerm) ||
            (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
        
        if (blogList) {
            if (filteredBlogs.length === 0) {
                blogList.innerHTML = `
                    <div class="empty-blogs">
                        <p>No blog posts found matching "${escapeHtml(searchTerm)}"</p>
                    </div>
                `;
            } else {
                blogList.innerHTML = '';
                filteredBlogs.forEach((blog, index) => {
                    const blogCard = createBlogCard(blog, index);
                    blogList.appendChild(blogCard);
                });
            }
        }
    }
    
    function getBlogsFromStorage() {
        const blogsJson = localStorage.getItem(STORAGE_KEY);
        return blogsJson ? JSON.parse(blogsJson) : [];
    }
    
    function saveBlogsToStorage(blogs) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';
        if (type === 'warning') icon = 'exclamation-triangle';
        
        toast.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    function calculateReadingTime(content) {
        const text = content
            .replace(/```[\s\S]*?```/g, '') 
            .replace(/#+\s+(.*)/g, '$1')
            .replace(/\[(.*?)\]\(.*?\)/g, '$1')
            .replace(/!\[(.*?)\]\(.*?\)/g, '') 
            .replace(/(\*\*|__)(.*?)(\*\*|__)/g, '$2') 
            .replace(/(\*|_)(.*?)(\*|_)/g, '$2')
            .trim();
        
        const wordCount = text.split(/\s+/).length;
        const wordsPerMinute = 200;
        
        return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    }
} 
