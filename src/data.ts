interface Nest {
    heading: string
    text: string
}

interface Child {
    heading: string
    text: string
    bookmark?: Nest
    intelligent?: Nest
    share?: Nest
}

interface Data {
    hero: Child
    features: Child
    extensions: Child
    faq: Child
}


const data: Data = {
    hero: <Child> {
        heading: 'A Simple Bookmark Manager',
        text: `A clean and simple interface to orgaanize your favourite websites.
                Open a new browser tab and see your sites load instantly. Try it 
                for free.`
    },
    features: <Child> { 
            bookmark: <Nest> {
                heading: 'Bookmarks in one click',
                text: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.`
            },
            intelligent: <Nest> {
                heading: 'Intelligent Search',
                text: ` Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.`
            },
            share: <Nest> {
                heading: 'Share your bookmarks',
                text: `
                Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.`
            },
            heading: 'Features',
            text: ` Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.`                
    },
    extensions: <Child> {
        heading : 'Download the extenstion',
        text: `We've got more browsers in the pipeline. Please do let us know if you've got a favourite
                you'd like us to prioritise`
    },
    faq: <Child> {
        heading: 'Frequently Asked Questions',
        text: `Here are some of out FAQs. If you have any other questions you'd
                like answered please feel free to email us.`
    },
}


interface Faq {
    question: string
    answer: string
    id:number
}
export const faq: Faq[] = [
    {
        id: 898,
        question: 'What is Bookmark?',
        answer: `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                   justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`
    },
    {
        id: 658,
        question: 'How can i request a new browser?',
        answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`
    },
    {
        id: 332,
        question: 'Is there a mobile app?',
        answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
        sollicitudin ex et ultricies bibendum.`
    },
    {
        id: 121,
        question: 'What about other Chromium browsers?',
        answer: `  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
        vitae neque eget nisl gravida pellentesque non ut velit.`
    }
]

export default data