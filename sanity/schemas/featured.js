export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    orderings: [
      {
        title: 'Featured Images, New',
        name: 'featuredImages',
        by: [
          {field: 'image', direction: 'desc'}
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  }
  