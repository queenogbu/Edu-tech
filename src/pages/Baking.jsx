import React, { useEffect } from 'react';
import Bake from '../assets/images/bakingpics1.jpg';

const Baking = () => {
    useEffect(() => {
        document.title = 'Baking';
    }, []);

    return (
       <div>
            <h2>Baking</h2>
            
       <div>
       <img src={Bake} alt="Baking" width={200}/>

       <iframe width="853" height="480" src="https://www.youtube.com/embed/yrzOQ2Ssqnw" title="Easy Vanilla Sponge Cake Without Oven Recipe | How To Make Basic Sponge Cake | Plain Sponge Cake" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

       </div>
       </div>

    );
};

export default Baking;