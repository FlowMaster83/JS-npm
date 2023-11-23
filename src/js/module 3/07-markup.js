const profile = {
  userName: "David James",
  tag: "davja",
  location: "London",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkup = function (userProfile) {
  const {
    name,
    tag,
    location = "Planet Earth",
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);
