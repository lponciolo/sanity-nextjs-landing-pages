export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eac13e5f75dc4983275033c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8fk67vdd',
                  apiId: 'abffe0c7-ebf9-4254-9a3c-0e45fdc2ccde'
                },
                {
                  buildHookId: '5eac13e5a0ab905c565848cc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kidx1yrx',
                  apiId: '80fcd223-20e0-41a0-b9f2-5d999ddbec40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leitooop/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kidx1yrx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
