export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f8505d3f6bd714232645649',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-8xa8p5uo',
                  apiId: 'eb4ea93a-57d5-41b7-9dc1-8cafc40ede91'
                },
                {
                  buildHookId: '5f8505d3b9211a3f687351c6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-cdpw6qbf',
                  apiId: '1d1fc5f3-5922-4c24-bb5e-e0187dab2ad2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jud3v/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-cdpw6qbf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
