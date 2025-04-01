import {MainPage} from "../app/MainPage/MainPage.tsx";
import {RouteMap} from "../types/router/routeMap.ts";

export const routeMap: RouteMap[] = [
  {
    path: '/',
    name: 'Hlavní stránka',
    component: <MainPage/>,
  },
  {
    path: '/kurzy',
    name: 'Dostupné kurzy',
    component: <h1>Ahoj slovo</h1>,
    subpages: [
      {
        path: '/kurzy/js',
        name: 'JavaScript',
        component: <h1>Ahoj slovo</h1>,
      },
      {
        path: '/kurzy/react',
        name: 'React',
        component: <h1>Ahoj slovo</h1>,
      },
      {
        path: '/kurzy/node',
        name: 'Node.js',
        component: <h1>Ahoj slovo</h1>,
      },
      {
        path: '/kurzy/typescript',
        name: 'TypeScript',
        component: <h1>Ahoj slovo</h1>,
      },
      {
        path: '/kurzy/graphql',
        name: 'GraphQL',
        component: <h1>Ahoj slovo</h1>,
      },
      {
        path: '/kurzy/nextjs',
        name: 'Next.js',
        component: <h1>Ahoj slovo</h1>,
      },
    ],
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: <h1>Ahoj slovo</h1>,
  },
  {
    path: '/blog',
    name: 'Náš blog',
    component: <h1>Ahoj slovo</h1>,
  },
  {
    path: '/kontakt',
    name: 'Ozvěte se nám',
    component: <h1>Ahoj slovo</h1>,
  }
]