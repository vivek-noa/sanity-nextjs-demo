export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6318635724607c184f2e2462',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-demo-studio-8je9gw2j',
                  apiId: '0b70b197-3553-4c83-92da-f2244cee3d51'
                },
                {
                  buildHookId: '63186358e6f7d219b3d37243',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-demo-web-j9xj7aht',
                  apiId: '1a58fecf-c60d-4aa6-af17-047e32e67a10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivek-noa/sanity-nextjs-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-demo-web-j9xj7aht.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
