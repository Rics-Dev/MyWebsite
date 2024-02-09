
export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string', // Assuming the icon is an image, adjust if needed
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string',
        },
    ],
};
