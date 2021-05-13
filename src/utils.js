const paginate = (followers) => {
    const itemPerPage = 4;
    const pages = Math.ceil(followers.length / itemPerPage);

    const newArray = Array.from({ length: pages }, (_, index) => {
        const start = index * itemPerPage
        return followers.slice(start, start + itemPerPage)
    })
    // console.log((newArray));
    return newArray
}

export default paginate
