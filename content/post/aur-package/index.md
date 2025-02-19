+++
author = "Aayush"
title = "Comprehensive Guide to Creating and Uploading an AUR Package"
date = "2025-02-19"
description = "Step-by-step guide to creating, building, and submitting a package to the Arch User Repository (AUR)."
categories = ["Arch Linux"]
tags = ["PKGBUILD", "AUR", "Arch Linux"]
image = "archlinuxb.png"
+++

This guide provides a step-by-step tutorial on how to create, build, and upload a package to the Arch User Repository (AUR). Follow along to learn the entire process from setting up SSH keys to publishing your package.

<!--more-->

## Step 1: Set Up SSH Keys for AUR Access

Before you can push to the AUR, you need to set up SSH authentication.

```sh
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```

Copy the output and add it to your [AUR account](https://aur.archlinux.org/account/) under the SSH key section.

To verify SSH connectivity:

```sh
ssh aur@aur.archlinux.org
```

If successful, you should see a welcome message.

---

## Step 2: Create and Structure Your AUR Package

Now, create a directory for your package:

```sh
mkdir carch
cd carch
```

Create the `PKGBUILD` file:

```sh
touch PKGBUILD
```

Edit `PKGBUILD` with the following template:

```sh
# Maintainer: Your Name <your.email@example.com>
pkgname="carch"
pkgver="1.0.0"
pkgrel=1
pkgdesc="A script to automate Arch Linux setup"
arch=('x86_64')
url="https://harilvfs.github.io/carch/"
license=('MIT')
depends=('bash' 'libnewt')
source=("https://github.com/yourusername/carch/releases/download/v$pkgver/carch"
        "https://raw.githubusercontent.com/yourusername/carch/main/carch.desktop")
sha256sums=('SKIP' 'SKIP')

package() {
    install -Dm755 "$srcdir/carch" "$pkgdir/usr/bin/carch"
    install -Dm644 "$srcdir/carch.desktop" "$pkgdir/usr/share/applications/carch.desktop"
}
```

---

## Step 3: Generate `.SRCINFO`

Generate the `.SRCINFO` file:

```sh
makepkg --printsrcinfo > .SRCINFO
```

---

## Step 4: Initialize Git and Push to AUR

Now, initialize the Git repository and push the package to AUR.

```sh
git init
git add .
git commit -m "Initial release of Carch"
git remote add aur ssh://aur@aur.archlinux.org/carch.git
git push aur master
```

---

## Step 5: Install and Test the AUR Package

Once your package is uploaded, install it using an AUR helper like `yay` or `paru`:

```sh
yay -S carch
```

Or manually clone and build:

```sh
git clone https://aur.archlinux.org/carch.git
cd carch
makepkg -si
```

---

## Additional Notes

- If you update your package, bump the `pkgver`, regenerate `.SRCINFO`, commit, and push the changes.
- Use `makepkg -cf` to test builds before uploading.
- Ensure all dependencies are correctly listed.
