export const allPostsQuery = () => {
    const query = `*[_type == "post"] | order(_createdAt desc){
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
        postedBy->{
          _id,
          userName,
          profileImage
        },
      likes,
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        profileImage
      },
      }
    }`;

    return query;
};
