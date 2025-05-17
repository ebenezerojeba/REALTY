import { Cloudinary } from '@cloudinary/url-gen'
export const cld = new Cloudinary({
    cloud: {
        cloudName: 'your-cloud-name',
        apiKey: 'your-api-key',
    },
    url: {
        secure: true
    }
})

export const options = {
    upload_preset: '',
    resource_type: 'image',
    unsigned: true
}