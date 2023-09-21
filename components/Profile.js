import  styles  from "./Profile.module.css"

const user = {
    name: 'Jefferson Nascimento',
    imageUrl: 'https://avatars.githubusercontent.com/u/105395575?s=400&u=82f053f2006297897bfbd917a06214c780df415e&v=4',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className={styles.avatar}
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
}