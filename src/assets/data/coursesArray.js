import imgHtml from '../images/courses/html.jpg';
import imgNode from '../images/courses/node.jpg';
import imgReact from '../images/courses/react.jpg';

export let coursesArray = [
    {
        title: 'HTML & CSS',
        price: '499.99',
        hours: "5",
        image: imgHtml,
        videos: [
            { title: "Introduction to HTML", url: "https://www.youtube.com/watch?v=KtTe_ckT3iM" },
            { title: "CSS Basics", url: "https://www.youtube.com/watch?v=KtTe_ckT3iM" },
            { title: "Advanced CSS", url: "https://www.youtube.com/watch?v=KtTe_ckT3iM" }
        ],
        videoIntro: { title: "Introduction ", url: "https://www.youtube.com/watch?v=KtTe_ckT3iM" },

        discount: '20%',
        status: "paid",
        duration: '5',
        description: {
            text: "تعد هذه الدورة مقدمة شاملة لتعلم برمجة الويب باستخدام تقنيات حديثة مثل React وNode.js. ستتعلم أساسيات البرمجة والتطوير، وكيفية بناء تطبيقات ويب تفاعلية.",
            objectives: [
                "فهم الأساسيات الخاصة بتقنيات الويب الحديثة.",
                "بناء تطبيقات ويب تفاعلية باستخدام React.",
                "التعرف على كيفية إنشاء خوادم باستخدام Node.js وExpress."
            ],
            outcomes: [
                "بعد إتمام الدورة، سيكون لديك المهارات اللازمة لتطوير تطبيقات ويب متكاملة، وفهم كيفية التعامل مع قواعد البيانات، وإدارة الجلسات والمصادقة."
            ]
        },
        instructor: {
            name: "Jonas",
            image: "https://abdelrhman1812.github.io/Portfolioo/static/media/ody.1f7ab7a43fb37c86d774.jpg",
            bio: "عبدالرحمن علي هو مطور واجهات أمامية React.js بخبرة تتراوح بين 1 إلى 2 سنة. متخصص في بناء التطبيقات التفاعلية باستخدام تقنيات حديثة.",
            LinkedIn: ""
        },
        reviews: [
            { name: "John Doe", text: "Great course!", rating: 5 },
            { name: "Jane Smith", text: "Very informative.", rating: 4 },
        ]
    },
    {
        title: 'React',
        price: '599.99',
        hours: "8",
        image: imgReact,
        videos: [],
        videoIntro: "",
        discount: '30%',
        status: "paid",
        duration: '8',
        description: {
            text: "تعد هذه الدورة مقدمة شاملة لتعلم برمجة الويب باستخدام تقنيات حديثة مثل React وNode.js. ستتعلم أساسيات البرمجة والتطوير، وكيفية بناء تطبيقات ويب تفاعلية.",
            objectives: [
                "فهم الأساسيات الخاصة بتقنيات الويب الحديثة.",
                "بناء تطبيقات ويب تفاعلية باستخدام React.",
                "التعرف على كيفية إنشاء خوادم باستخدام Node.js وExpress."
            ],
            outcomes: [
                "بعد إتمام الدورة، سيكون لديك المهارات اللازمة لتطوير تطبيقات ويب متكاملة، وفهم كيفية التعامل مع قواعد البيانات، وإدارة الجلسات والمصادقة."
            ]
        },
        instructor: {
            name: "Jonas",
            image: "https://abdelrhman1812.github.io/Portfolioo/static/media/ody.1f7ab7a43fb37c86d774.jpg",
            bio: "عبدالرحمن علي هو مطور واجهات أمامية React.js بخبرة تتراوح بين 1 إلى 2 سنة. متخصص في بناء التطبيقات التفاعلية باستخدام تقنيات حديثة.",
            LinkedIn: ""
        },
        reviews: [
            { name: "John Doe", text: "Great course!", rating: 5 },
            { name: "Jane Smith", text: "Very informative.", rating: 4 },
        ]
    },

    {
        title: 'Node Js',
        price: '549.99',
        hours: "6",
        image: imgNode,
        videos: [
            { title: "Introduction to HTML", url: "https://example.com/video1" },
            { title: "CSS Basics", url: "https://example.com/video2" },
            { title: "Advanced CSS", url: "https://example.com/video3" }
        ], videoIntro: "",
        discount: '25%',
        status: "paid",
        duration: '6',
        description: {
            text: "تعد هذه الدورة مقدمة شاملة لتعلم برمجة الويب باستخدام تقنيات حديثة مثل React وNode.js. ستتعلم أساسيات البرمجة والتطوير، وكيفية بناء تطبيقات ويب تفاعلية.",
            objectives: [
                "فهم الأساسيات الخاصة بتقنيات الويب الحديثة.",
                "بناء تطبيقات ويب تفاعلية باستخدام React.",
                "التعرف على كيفية إنشاء خوادم باستخدام Node.js وExpress."
            ],
            outcomes: [
                "بعد إتمام الدورة، سيكون لديك المهارات اللازمة لتطوير تطبيقات ويب متكاملة، وفهم كيفية التعامل مع قواعد البيانات، وإدارة الجلسات والمصادقة."
            ]
        },
        instructor: {
            name: "Jonas",
            image: "https://abdelrhman1812.github.io/Portfolioo/static/media/ody.1f7ab7a43fb37c86d774.jpg",
            bio: "عبدالرحمن علي هو مطور واجهات أمامية React.js بخبرة تتراوح بين 1 إلى 2 سنة. متخصص في بناء التطبيقات التفاعلية باستخدام تقنيات حديثة.",
            LinkedIn: ""
        },
        reviews: [
            { name: "John Doe", text: "Great course!", rating: 5 },
            { name: "Jane Smith", text: "Very informative.", rating: 4 },
        ]
    },
    {
        title: 'HTML & CSS',
        price: '499.99',
        hours: "5",
        image: imgHtml,
        videos: [
            { title: "Introduction to HTML", url: "https://example.com/video1" },
            { title: "CSS Basics", url: "https://example.com/video2" },
            { title: "Advanced CSS", url: "https://example.com/video3" }
        ], videoIntro: "",
        discount: '20%',
        status: "paid",
        duration: '5',
        description: {
            text: "تعد هذه الدورة مقدمة شاملة لتعلم برمجة الويب باستخدام تقنيات حديثة مثل React وNode.js. ستتعلم أساسيات البرمجة والتطوير، وكيفية بناء تطبيقات ويب تفاعلية.",
            objectives: [
                "فهم الأساسيات الخاصة بتقنيات الويب الحديثة.",
                "بناء تطبيقات ويب تفاعلية باستخدام React.",
                "التعرف على كيفية إنشاء خوادم باستخدام Node.js وExpress."
            ],
            outcomes: [
                "بعد إتمام الدورة، سيكون لديك المهارات اللازمة لتطوير تطبيقات ويب متكاملة، وفهم كيفية التعامل مع قواعد البيانات، وإدارة الجلسات والمصادقة."
            ]
        },
        instructor: {
            name: "Jonas",
            image: "https://abdelrhman1812.github.io/Portfolioo/static/media/ody.1f7ab7a43fb37c86d774.jpg",
            bio: "عبدالرحمن علي هو مطور واجهات أمامية React.js بخبرة تتراوح بين 1 إلى 2 سنة. متخصص في بناء التطبيقات التفاعلية باستخدام تقنيات حديثة.",
            LinkedIn: ""
        },
        reviews: [
            { name: "John Doe", text: "Great course!", rating: 5 },
            { name: "Jane Smith", text: "Very informative.", rating: 4 },
        ]
    },
    {
        title: 'React',
        price: '599.99',
        hours: "8",
        image: imgReact,
        videos: [
            { title: "Introduction to HTML", url: "https://example.com/video1" },
            { title: "CSS Basics", url: "https://example.com/video2" },
            { title: "Advanced CSS", url: "https://example.com/video3" }
        ], videoIntro: "",
        discount: '30%',
        status: "paid",
        duration: '8',
        description: {
            text: "تعد هذه الدورة مقدمة شاملة لتعلم برمجة الويب باستخدام تقنيات حديثة مثل React وNode.js. ستتعلم أساسيات البرمجة والتطوير، وكيفية بناء تطبيقات ويب تفاعلية.",
            objectives: [
                "فهم الأساسيات الخاصة بتقنيات الويب الحديثة.",
                "بناء تطبيقات ويب تفاعلية باستخدام React.",
                "التعرف على كيفية إنشاء خوادم باستخدام Node.js وExpress."
            ],
            outcomes: [
                "بعد إتمام الدورة، سيكون لديك المهارات اللازمة لتطوير تطبيقات ويب متكاملة، وفهم كيفية التعامل مع قواعد البيانات، وإدارة الجلسات والمصادقة."
            ]
        },
        instructor: {
            name: "Jonas",
            image: "https://abdelrhman1812.github.io/Portfolioo/static/media/ody.1f7ab7a43fb37c86d774.jpg",
            bio: "عبدالرحمن علي هو مطور واجهات أمامية React.js بخبرة تتراوح بين 1 إلى 2 سنة. متخصص في بناء التطبيقات التفاعلية باستخدام تقنيات حديثة.",
            LinkedIn: ""
        },
        reviews: [
            { name: "John Doe", text: "Great course!", rating: 5 },
            { name: "Jane Smith", text: "Very informative.", rating: 4 },
        ]
    }
];


