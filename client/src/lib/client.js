import { createClient } from '@sanity/client'
import imageUrlBuilder  from '@sanity/image-url'

const client = createClient({
     projectId: 'yxhb7if6',
     dataset: 'production',
     useCdn: true,
     apiVersion: '2023-11-19'
})

const builder = imageUrlBuilder(client)

export default client
export const urlFor = (source) => builder.image(source);