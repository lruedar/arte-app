This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Arquitectura Feature First:

/src
├── app/                        # Routing Layer (Next.js App Router)
│   ├── layout.tsx              # Layout raíz (Navbar/Footer compartidos)
│   ├── page.tsx                # Home / Landing
│   ├── actors/                 # RUTA: /actors
│   │   ├── page.tsx            # Listado de actores
│   │   ├── create/             # RUTA: /actors/create
│   │   │   └── page.tsx        # Página de creación
│   │   └── [id]/               # RUTA: /actors/:id
│   │       └── page.tsx        # Página de edición/detalle
│   └── api/v1/actors/          # Backend interno
│       ├── route.ts
│       └── [id]/
│           └── route.ts
│
├── modules/                    # Feature-First Layer (Lógica de negocio)
│   └── actors/                 # Módulo específico de Actores
│       ├── ui/                 # Componentes del módulo (ActorForm, ActorCard)
│       ├── services/           # Peticiones específicas (getActors, createActor)
│       ├── hooks/              # Lógica de estado (useActors, useActorForm)
│       ├── types/              # Interfaces (Actor.ts, ActorDTO.ts)
│       ├── utils/              # Validaciones (Zod schemas, formatters)
│       └── pages/              # (Opcional) Contenedores grandes de cada vista
│
├── shared/                     # Global/Core Layer (Reutilizable)
│   ├── ui/                     # Componentes atómicos (Button, Input, Modal)
│   ├── services/
│   │   └── http.ts             # Instancia de Axios o fetch configurado
│   ├── hooks/                  # Hooks globales (useDebounce, useToast)
│   └── utils/                  # Helpers globales
│
├── lib/                        # Configuraciones de librerías (prisma, firebase, etc.)
└── styles/                     # Archivos .css globales
