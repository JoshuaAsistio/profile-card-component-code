import "./Profile.css";

const Profile = () => {
  return (
    <main className="main">
      <div class="main__img"></div>

      <div className="main__profile">
        <img
          src="./images/image-victor.jpg"
          alt="profile"
          className="main__profile__image"
        />

        <div className="main__profile__name-age">
          <span className="main__profile__name-age__name">Victor Crest</span>
          <span className="main__profile__name-age__age">26</span>
        </div>

        <p className="main__profile__location">London</p>
      </div>

      <p className="hr"></p>

      <div className="main__stats">
        <div>
          <h2>80K</h2>
          <p>Followers</p>
        </div>
        <div>
          <h2>803K</h2>
          <p>Likes</p>
        </div>
        <div>
          <h2>1.4K</h2>
          <p>Photos</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
