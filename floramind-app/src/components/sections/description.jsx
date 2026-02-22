import React from 'react'
import './description.css'
const Description =()=>{
    return(
        <section className="description">
            <img src="/images/second_screen/leaves_left.png" alt="декор листья" className="leaves_left" />
            <img src="/images/second_screen/leaves_right.png" alt="декор листья" className="leaves_right" />
            <div className="text-block">
                <h3 className="title">FloraMind</h3>
                <p className="sub-title">
                    — это цветочная гармония, созданная искусственным интеллектом. Наш ИИ-флорист 
                    FloraAI превращает ваши эмоции, повод и пожелания в единственный в своём роде букет 
                    — такой же уникальный, как чувства, которые вы хотите выразить.
                </p>
            </div>
        </section>
    );
};

export default Description