export const cronJobSchedules: { value: string, label: string }[] = [
    {
        value: '*/5 * * * *',
        label: 'Every 5 minutes'
    },
    {
        value: '0 * * * *',
        label: 'Every hour, at minute 0'
    },
    {
        value: '0 0 * * *',
        label: 'Every day, at midnight'
    },
    {
        value: '0 0 * * 0',
        label: 'Every Sunday, at midnight'
    },
    {
        value: '0 0 1 * *',
        label: 'Every month, on the 1st day at midnight'
    }
];



export const newsStatuses=[{ value: 'draft', label: "Draft" }, { value: 'published', label: "Published" }, { value: 'archieved', label: "Archieved" }];