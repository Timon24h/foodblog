const data = [
    {
        id: 1,
        title: "molokhia",
        titleImg: "https://www.simplyleb.com/wp-content/uploads/Molokhia-17.jpg",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maxime voluptatibus, veritatis dolores assumenda sint? Vitae consequuntur illum omnis, ratione ut architecto a rem quisquam voluptatum delectus eos possimus neque."
    },
    {
        id: 2,
        title: "molokhia",
        titleImg: "https://www.simplyleb.com/wp-content/uploads/Molokhia-17.jpg",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maxime voluptatibus, veritatis dolores assumenda sint? Vitae consequuntur illum omnis, ratione ut architecto a rem quisquam voluptatum delectus eos possimus neque."
    },
    {
        id: 3,
        title: "molokhia",
        titleImg: "https://www.simplyleb.com/wp-content/uploads/Molokhia-17.jpg",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maxime voluptatibus, veritatis dolores assumenda sint? Vitae consequuntur illum omnis, ratione ut architecto a rem quisquam voluptatum delectus eos possimus neque."
    },
    {
        id: 4,
        title: "molokhia",
        titleImg: "https://www.simplyleb.com/wp-content/uploads/Molokhia-17.jpg",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maxime voluptatibus, veritatis dolores assumenda sint? Vitae consequuntur illum omnis, ratione ut architecto a rem quisquam voluptatum delectus eos possimus neque."
    },
    {
        id: 5,
        title: "molokhia",
        titleImg: "https://www.simplyleb.com/wp-content/uploads/Molokhia-17.jpg",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maxime voluptatibus, veritatis dolores assumenda sint? Vitae consequuntur illum omnis, ratione ut architecto a rem quisquam voluptatum delectus eos possimus neque."
    }
];

function getBlogPosts(){
    return data
}

function getFirstThreeBlogPosts(){
    return [data[0],data[1], data[2] ]

}

export {getBlogPosts, getFirstThreeBlogPosts}
