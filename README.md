# Curso de Desarrollo de Aplicaciones Web con Gatsby JS

## Introducción a Gatsby

### ¿Qué es Gatsby?

- Framework
- Abierto y gratuito
- Comunidad increíble
- Apuesta a un stack innovador
- Increíblemente rápido en desarrollo y producción

¿Cómo funciona? Gatsby recolecta la información previamente. Funciona como un sistema SSR. Trae la información de distintas fuents, como una Base de datos, un CMS o un sistema de archivos. Con esto crea vistas con React y GraphQL. Crea un sitio estático.

[Página oficial de Gatsby](https://www.gatsbyjs.com/)

[micro-frontends with Gatsby](https://www.youtube.com/watch?v=0Ta-awtLZTs)

### ¿Por qué Gatsby? Seguridad y Velocidad

Cuando vamos a hacer un proyecto debemos tomar la decisión de qué framework usar. Por ejemplo escogemos entre Vue y React. La ventaja es que nos crean una SPA, con la desventaja de que es 1 archivo HTML y múltiples archivos JS.

Herrmientas de SSR:

- Nuxt (para Vue)
- Next.js (para React)

Gatsby se construye en el servidor apoyándose de NodeJS y de Webpack. También usa los plugins para obtener información de diversas fuentes.

Gatsby usa:

- Virtual DOM
- Componentes
- Hot Reloading
- Code Splitting e imágenes responsivas

Ya que Gatsby hace un sitio estático es muy fácil hacer el despliegue.

### Diferencias entre SPA, SSR y Gatsby

[Artículo en Platzi](https://platzi.com/clases/1618-gatsby/21373-diferencias-entre-spa-ssr-y-gatsby/)

## Preparando el entorno

### Requisitos previos

Tienes que conocer sobre Node, NPM, React y GraphQL.

- [Node.js Ultimate Beginner's Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4)
- [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)
- [GraphQL Explained in 100 seconds](https://www.youtube.com/watch?v=eIQh02xuVw4)

Es muy recomendado tener Prettier y ESLint, además de los snippets de React.

### Gatsby y Gatsby CLI y Starters

Hay que instalar `npm install -g gatsby-cli`

Las 3 dependencias básicas de un proyecto en Gatbsy: `npm i react react-dom gatsby`

Usamos `gatsby develop`

Ahora con el CLI de Gatsby podemos crear un proyecto `gatsby new projectName`

Podemos crear proyectos que ya existen, por ejemplo tenemos 2 platillas (de las muchas que hay):

- `gatsby new gatsbycliproject`
- `gatsby new gatsbyjs/gatsby-starter-blog`

### Configuración de ESLint

[Artículo en Platzi](https://platzi.com/clases/1618-gatsby/20983-configuracion-de-eslint/)

## Fundamentos de Gatsby

### Presentación y Estructura de Archivos de nuestro proyecto: Platziswag

Clonamos `git clone https://github.com/Jossdz/Gatsby-platzi`

Si da error al hacer `npm i`:

- Hacemos `npm update`
- Luego `npm i --unsafe-perm`

---

- En el archivo 'gatsby-config.js' tenemos toda la configuración de nuestro proyecto.
- En el archivo 'gatsby-browser.js' es la configuración del lado del cliente y también podemos hacer llamadas a APIs.
- En el archivo 'gatsby-node.js' tenemos las piezas de construcción. Aquí usamos GraphQL.
- En el archivo 'gatsby-ssr.js' es muy similiar al gatsby-browser.js, pero es para el servidor.

### Ecosistema de plugins

Los plugins son herramientas o paquetes de código que nos van a ayudar en nuestro proyecto. Son como las dependencias de NPM.

Tenemos 3 tipos de plugins:

1. Componentes
2. Funcionalad
3. Fuente de datos

Gatsby tiene un plugin para de fuente de datos: `resolve: gatsby-source-filesystem`,

Documentación para algunos plugins:

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/docs/add-page-metadata/#using-react-helmet-and-gatsby-plugin-react-helmet)
- [gatsby-transformer-sharp](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-image/#common-fragments-with-gatsby-transformer-sharp)
- [gatsby-plugin-sharp](https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/#gatsby-plugin-sharp-requires-node-x64)
- [gatsby-source-filesystem](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-the-filesystem/#using-gatsby-source-filesystem)
- [gatsby-plugin-manifest](https://www.gatsbyjs.com/docs/how-to/performance/add-a-manifest-file/#using-gatsby-plugin-manifest)

### Usando React para manejar la parte visual e interactiva de nuestra aplicación

## Creando la vista con React

### Router en Gatsby y Componente Link

Creamos los links de la página en la carpeta de 'pages', siendo archivos de JS.

### Layout en Gatsby

Encerramos todas las pages de nuestra página con algo muy sencillo, en el archivo gatsby-browser.js:

```javascript
const React = require('react')
const Layout = require('./src/components/layout').default

exports.wrapRootElement = ({element}) => ( <Layout> {element} </Layout> )
```

[Documentación de Wrap Root Element](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement)

## Graphql en Gatsby

### ¿Cómo funciona GraphQL en Gatsby?

GraphQL es un lenguaje tipado que nos ayuda a comunicar servicios. No importa cual sea la fuente de datos, podemos recolectar la información.
Todo el flujo sucede solamente en 'desarrollo'. La información se recolecta previamente en este proceso.

### Accediendo a nuestros datos en Gatsby desde GraphQL

Cuando hacemos `gatsby develop` tenemos acceso a `http://localhost:8000/___graphql` donde tenemos una herramienta para hacer queries.

❗ Importante: NO debemos ni siquiera warnings porque GraphlQL no funcionará.

```graphql
query TodasLasFotos{
  allFile{
    totalCount
  }
}
```

En este caso, esta query nos regresa:

```json
{
  "data": {
    "allFile": {
      "totalCount": 11
    }
  },
  "extensions": {}
}
```

### Queries, Edges (conexiones) y Nodos en Gatsby

Podemos pedir información más específica de nuestras imágenes, pero es necesario que primero entremos a los Edges (que son las conexiones con los plugins) y luego a los Nodos.

```graphql
query TodasLasFotos{
  allFile{
    totalCount
    edges{
      node{
        name
        relativePath
        size
      }
    }
  }
}
```

Este query nos regresa:

```json
{
  "data": {
    "allFile": {
      "totalCount": 11,
      "edges": [
        {
          "node": {
            "name": "Logo",
            "relativePath": "Logo.png",
            "size": 6321
          }
        },
        {
          "node": {
            "name": "cart",
            "relativePath": "cart.png",
            "size": 515
          }
        },
        {
          "node": {
            "name": "gatsby-icon",
            "relativePath": "gatsby-icon.png",
            "size": 21212
          }
        },
        {
          "node": {
            "name": "stickers1",
            "relativePath": "stickers1.png",
            "size": 44827
          }
        },
        {
          "node": {
            "name": "camiseta",
            "relativePath": "camiseta.png",
            "size": 97101
          }
        },
        {
          "node": {
            "name": "hoodie",
            "relativePath": "hoodie.png",
            "size": 83826
          }
        },
        {
          "node": {
            "name": "icon",
            "relativePath": "icon.png",
            "size": 126350
          }
        },
        {
          "node": {
            "name": "pin",
            "relativePath": "pin.png",
            "size": 71111
          }
        },
        {
          "node": {
            "name": "mug",
            "relativePath": "mug.png",
            "size": 56485
          }
        },
        {
          "node": {
            "name": "gatsby-astronaut",
            "relativePath": "gatsby-astronaut.png",
            "size": 167273
          }
        },
        {
          "node": {
            "name": "stickers2",
            "relativePath": "stickers2.png",
            "size": 110158
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

### Consultas en GraphQL desde React

Los queries solamente se pueden ejecutar dentro de los archivos que están en la carpeta de 'pages' y tienen que ser exportados.

Vamos a conseguir esta información:

```javascript
siteMetadata: {
  title: `Platziswag`,
  description: `El mejor swag de Platzi disponible para ti`,
  author: `@MiguelAngelRe28`,
},
```

En index.js dentro de  'pages':

```jsx
import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from '../components/'
import { SEO } from "../components"

export const query = graphql`
  query GET_DESCRIPTION{
  allSite{
    edges{
      node{
        siteMetadata{
          description
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias">Go to gracias</Link>
  </>
)

export default IndexPage

```

Y en Jumbo.js dentro de 'components':

```jsx
import React from 'react'
import {StyledJumbo} from '../styles/components'

export default function Jumbo({description}) {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Consigue el mejor swag exclusivo y especial de Platzi!</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}

```

Y lo veremos reflejado en la página web.

❗ Importante, NO deberías tener más constantes con el nombre de 'query' porque Gatsby busca esta constante para hacer las consultas.
