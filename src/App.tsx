import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className={'app-wrapper'}>
      <header className={'header'}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZJl9r7JapjoydUuxwLEWyGBSJqFNwoBfRGlnZYdXzd-YoXY2Yo2ylJnjng&s'/>
      </header>
      <nav className={'nav'}>
        <div>
          <a>TS Profile TS</a>
        </div>
        <div>
          <a>TS Message TS</a>
        </div>
        <div>
          <a>TS News TS</a>
        </div>
        <div>
          <a>TS Music TS</a>
        </div>
        <div>
          <a>TS Settings TS</a>
        </div>
      </nav>
      <div className={'content'}>
        <div><img
          src="https://lh4.googleusercontent.com/proxy/x0kSBZDM2lLD9jxQXJ2TydhhwWn8NHTEVtvtAwKCqMVcuNY4EMDe7c2EfnHm5fbGLBVHxqs8HJbBfKhNEZoAAhDe2YFv6HOPAUIec1KHuT-K4adL"
          alt="img"/>
        </div>
        <div> avatar + discription https://i.pinimg.com/originals/63/2d/6f/632d6f00a809cf8c77f65142395458de.png</div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
