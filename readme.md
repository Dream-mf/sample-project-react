# Microfrontends using Module Federation and React

This is an example application using react (and webpack/rspack) as a host, and create react application as remotes. These are dynamically resolved in each page route.

## What is a Microfrontend Architecture?

Microfrontend architecture is an approach to breaking up your front-end into a set of independently deploy-able, loosely coupled applications and/or components. These applications are then assembled together to act as a single user experience, once deployed.

## What is module federation?

When we talk microfrontends, we generally need to load applications individually asynchronously only when requested. We do this by using a feature known as Module Federation to create a single deployable artifact of an application, which can be loaded on demand. 

More Information: [Documentation](https://webpack.js.org/concepts/module-federation/)

## What are hosts and remotes?

When we talk about micro-frontends or micro-sites, we often use words like `HOST` and `REMOTE`. A remote is a single page react application. A host is a parent application that ties all remotes together.

Often time a host can extend configuration, security, types, routing, and many other features to remotes, so that each remote does not have to implement them individually.

Lets take a quick look at the folder structure before we get too deep.

## Solution Structure

For now we will keep the structure loose and simple:

```
├─── 📁 host                > React Host
│    ├─── 📁 layout         > Shared layout
│    └─── 📁 pages          > Routing
│
└─── 📁 remotes
     ├─── 📁 home           > React Remote using JSX
     ├─── 📁 profile        > React Remote using Typescript
     └─── 📁 sample         > React Remote using JSX

## Getting started
Ive really worked hard to keep this extremely simple to stand up.

First we need to install PNPM..
```bash
npm install -g pnpm
```

Now we are ready to start!

```bash
$ pnpm install
$ pnpm start
```

Now you may visit `http://localhost:3000` in a browser.
