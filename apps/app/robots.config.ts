/* Change configure robots for win32. More explain this issue: https://github.com/nuxt-modules/robots/issues/86 */
export default [
    { UserAgent: '*' },
    { Disallow: '/' },
    { BlankLine: true },
    { Comment: 'Comment here' },

    { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` }
]