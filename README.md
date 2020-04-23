# Gatsby test using client paths and pathPrefix

[related issue](https://github.com/gatsbyjs/gatsby/issues/23392)

### Steps to reproduce

1. clone this repository
```
git clone https://github.com/elrumordelaluz/gatsby-client-with-prefix.git
```

1. Go to directory and install packages
```
cd gatsby-client-with-prefix && yarn
```

1. Start the development server that must work as expected
```
yarn start
```

1. Build the website with `pathPrefix`
```
yarn build
# same as gatsby build --prefix-paths
```

1. Run the _Server_ using `pathPrefix`
```
gatsby serve --prefix-paths
```
