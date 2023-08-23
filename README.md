# Nayland_College

A GitHub presentation\_

# How to Setup your GitHub account

## Step 1: Visit the GitHub website

Go to GitHub to start the sign-up process.

## Step 2: Click 'Sign up'

On the top-right corner of the GitHub homepage, click the Sign up button.

## Step 3: Choose a plan

GitHub offers a variety of plans for individuals and teams. For personal use, select the Free plan, which offers basic features and unlimited public repositories.

## Step 4: Create your account

Fill in the required information, including:

Username: Choose a unique username that identifies you on GitHub.
Example: johndoe123
Email address: Provide a valid email address.
Example: johndoe@example.com
Password: Create a strong password that meets the minimum requirements.
Example: J0hnD03!2023

## Step 5: Verify your account

Complete the CAPTCHA challenge to verify you're not a robot. This usually involves selecting images based on a prompt or solving a puzzle.

## Step 6: Customize your experience (optional)

GitHub might ask you to answer a few questions to tailor your experience. These questions may include your level of programming experience, the purpose of using GitHub, and your preferred programming languages. Answer these questions or skip them if you prefer.

## Step 7: Confirm your email address

GitHub will send a verification email to the address you provided. Click on the verification link in that email to confirm your account.

## Step 8: Set up your profile (optional)

Once your account is verified, you can set up your profile by adding a profile picture, your name, a short bio, and other details. This step can be skipped and edited later if desired.

## Step 9: Start using GitHub

Now that your account is set up, you can start creating repositories, contributing to projects, and exploring GitHub's features.

Remember to explore GitHub's documentation and guides to learn more about its functionalities and how to use them effectively.

|--------------------------------------------------------------------------------------------------------------------------|

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1

## H2

### H3

### Bold

**bold text**

### Italic

_italicized text_

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^

|--------------------------------------------------------------------------------------------------------------------------|

# How to Set Up GitHub Pages

GitHub Pages allows you to create and host a simple website directly from your GitHub repository. Follow these step-by-step instructions to set up your own GitHub Pages site:

## 1. Create a new repository

- Go to [GitHub](https://github.com/) and sign in to your account.
- Click on the "+" icon in the upper right corner and select "New repository".
- Name your repository as follows: `your-username.github.io`, replacing `your-username` with your GitHub username.
- Add a short description for your repository (optional).
- Choose the visibility of your repository: public or private.
- Initialize the repository with a README.
- Click "Create repository".

## 2. Clone the repository

- On your repository's main page, click the "Code" button.
- Copy the HTTPS URL.
- Open your terminal or command prompt.
- Navigate to the directory where you want to clone the repository.
- Run the command `git clone [repository-url]`, replacing `[repository-url]` with the copied HTTPS URL.

## 3. Create your website

- In the cloned repository, create a new file named `index.html`.
- Add your website's content using HTML, CSS, and JavaScript.

## 4. Commit and push your changes

- In your terminal or command prompt, navigate to the repository's directory.
- Run the following commands to stage and commit your changes:

  git add .
  git commit -m "Initial commit"

- Push the changes to the remote repository using the command `git push origin main` or `git push origin master` (depending on the default branch name).

## 5. Enable GitHub Pages

- Go to your repository's "Settings" tab on GitHub.
- Scroll down to the "GitHub Pages" section.
- In the "Source" section, select the main or master branch.
- Click "Save".

## 6. Access your website

- Your GitHub Pages site will be available at `https://your-username.github.io` within a few minutes.
- Refresh the page if it does not load immediately.

**Note:** You can also use custom domains or project repositories for your GitHub Pages site. For more information, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).

<!-- void changes, i just want to test a pull request on a forked repo -->
