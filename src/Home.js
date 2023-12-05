import { useState } from "react";
import React, { Component } from 'react';
import Modal from "react-modal";




const Home = () => {
    
    
    const [name, setName] = useState ('rate');
    const [k, setK] = useState(0);

    const AdjustRating = (k) => {
        if (k >20) {k=5};
        if (k<20) {k=0};
    }

//#region 
    //
    
    //Model open new tab
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
        scrollToTop();
        

        
      };
      
      const closeModal = () => {
        window.location.reload()

      };


    const [changeColor, setchangeColor] = useState(true)
    const handC = () => {
        setchangeColor(!changeColor)
        ThirdClick(-2);
    }
    const [changeColor1, setchangeColor1] = useState(true)
    const handC1 = () => {
        setchangeColor1(!changeColor1)
        ThirdClick(0);
    }


    const [changeColor2, setchangeColor2] = useState(true)
    const handC2 = () => {
        setchangeColor2(!changeColor2)
        ThirdClick(1);

    }
    const [changeColor3, setchangeColor3] = useState(true)
    const handC3 = () => {
        setchangeColor3(!changeColor3)
        ThirdClick(2);

    }
    const [changeColor4, setchangeColor4] = useState(true)
    const handC4 = () => {
        setchangeColor4(!changeColor4)
        ThirdClick(-2);

    }
    const [changeColor5, setchangeColor5] = useState(true)
    const handC5 = () => {
        setchangeColor5(!changeColor5)
        ThirdClick(-2);

    }

    
    const [changeColor6, setchangeColor6] = useState(true)
    const handC6 = () => {
        setchangeColor6(!changeColor6)
        ThirdClick(0);

    }
    const [changeColor7, setchangeColor7] = useState(true)
    const handC7 = () => {
        setchangeColor7(!changeColor7)
        ThirdClick(0);

    }
    const [changeColor8, setchangeColor8] = useState(true)
    const handC8 = () => {
        setchangeColor8(!changeColor8)
        ThirdClick(2);

    }
    const [changeColor9, setchangeColor9] = useState(true)
    const handC9 = () => {
        setchangeColor9(!changeColor9)
        ThirdClick(0);

    }
    const [changeColor10, setchangeColor10] = useState(true)
    const handC10 = () => {
        setchangeColor10(!changeColor10)
        ThirdClick(0);

    }

    const [changeColor11, setchangeColor11] = useState(true)
    const handC11 = () => {
        setchangeColor11(!changeColor11)
        ThirdClick(-2);

    }
    

    const [changeColor12, setchangeColor12] = useState(true)
    const handC12 = () => {
        setchangeColor12(!changeColor12)
        ThirdClick(2);
    }

    /*const [changeColor13, setchangeColor13] = useState(true)
    const handC13 = () => {
        setchangeColor13(!changeColor13)
    }
    const [changeColor14, setchangeColor14] = useState(true)
    const handC14 = () => {
        setchangeColor14(!changeColor14)
    }
    const [changeColor15, setchangeColor15] = useState(true)
    const handC15 = () => {
        setchangeColor15(!changeColor15)
    }

    
    const [changeColor16, setchangeColor16] = useState(true)
    const handC16 = () => {
        setchangeColor16(!changeColor16)
    }
    const [changeColor17, setchangeColor17] = useState(true)
    const handC17 = () => {
        setchangeColor17(!changeColor17)
    }*/
    const [changeColor18, setchangeColor18] = useState(true)
    const handC18 = () => {
        setchangeColor18(!changeColor18)
        ThirdClick(2);

    }
    const [changeColor19, setchangeColor19] = useState(true)
    const handC19 = () => {
        setchangeColor19(!changeColor19)
        ThirdClick(0);

    }
    const [changeColor20, setchangeColor20] = useState(true)
    const handC20 = () => {
        setchangeColor20(!changeColor20)
        ThirdClick(0);

    }
    const [changeColor21, setchangeColor21] = useState(true)
    const handC21 = () => {
        setchangeColor21(!changeColor21)
        ThirdClick(2);

    }
    const [changeColor22, setchangeColor22] = useState(true)
    const handC22 = () => {
        setchangeColor22(!changeColor22)
        ThirdClick(2);

    }
    const [changeColor23, setchangeColor23] = useState(true)
    const handC23 = () => {
        setchangeColor23(!changeColor23)
        ThirdClick(4);

    }
    const [changeColor24, setchangeColor24] = useState(true)
    const handC24 = () => {
        setchangeColor24(!changeColor24)
        ThirdClick(1);

    }
    const [changeColor25, setchangeColor25] = useState(true)
    const handC25 = () => {
        setchangeColor25(!changeColor25)
        ThirdClick(-2);

    }
    const [changeColor26, setchangeColor26] = useState(true)
    const handC26 = () => {
        setchangeColor26(!changeColor26)
        ThirdClick(-5);

    }
    const [changeColor27, setchangeColor27] = useState(true)
    const handC27 = () => {
        setchangeColor27(!changeColor27)
        ThirdClick(-5);

    }
    const [changeColor28, setchangeColor28] = useState(true)
    const handC28 = () => {
        setchangeColor28(!changeColor28)
        ThirdClick(0);
    }
    const [changeColor29, setchangeColor29] = useState(true)
    const handC29 = () => {
        setchangeColor29(!changeColor29)
        ThirdClick(4);

    }
    const [changeColor30, setchangeColor30] = useState(true)
    const handC30 = () => {
        setchangeColor30(!changeColor30)
        ThirdClick(0);

    }
    const [changeColor31, setchangeColor31] = useState(true)
    const handC31 = () => {
        setchangeColor31(!changeColor31)
        ThirdClick(0);

    }
    const [changeColor32, setchangeColor32] = useState(true)
    const handC32 = () => {
        setchangeColor32(!changeColor32)
        ThirdClick(0);

    }
    const [changeColor33, setchangeColor33] = useState(true)
    const handC33 = () => {
        setchangeColor33(!changeColor33)
        ThirdClick(0);

    }
    const [changeColor34, setchangeColor34] = useState(true)
    const handC34 = () => {
        setchangeColor34(!changeColor34)
        ThirdClick(-2);

    }
    const [changeColor35, setchangeColor35] = useState(true)
    const handC35 = () => {
        setchangeColor35(!changeColor35)
        ThirdClick(1);

    }
    const [changeColor36, setchangeColor36] = useState(true)
    const handC36 = () => {
        setchangeColor36(!changeColor36)
        ThirdClick(3);

    }
    const [changeColor37, setchangeColor37] = useState(true)
    const handC37 = () => {
        setchangeColor37(!changeColor37)
        ThirdClick(12);

    }
    const [changeColor38, setchangeColor38] = useState(true)
    const handC38 = () => {
        setchangeColor38(!changeColor38)
        ThirdClick(6);

    }    
    const [changeColor39, setchangeColor39] = useState(true)
    const handC39 = () => {
        setchangeColor39(!changeColor39)
        ThirdClick(8);

    }
    const [changeColor40, setchangeColor40] = useState(true)
    const handC40 = () => {
        setchangeColor40(!changeColor40)
        ThirdClick(6);

    }

    const [changeColor41, setchangeColor41] = useState(true)
    const handC41 = () => {
        setchangeColor41(!changeColor41)
        LastClick(k);
        AdjustRating(k);


        
        
    }



    //#endregion



    const handleClick = () => {
        <a href="javascript:void(0)" className="special">1200 - 1600</a>

        console.log('LETS G-O');
        let k=3;
    }

    const ThirdClick = (int) => {
        setK(k + int);
    }
  
    const SecondHandle = (name) => {
        console.log('YOOO!' + name);
        setK(k + 0.1);
        setName(k + 0.1);

    
        <a href="javascript:void(0)" className="special">1200 - 1600</a>
    
    }
    /*<h1 className="basic" style=
            {{color: "white", backgroundColor: "#1e90FF", padding: 0 ,marginLeft: 370.}}>
             !
                דרג לי את הדירה</h1> */
                const [isPopupVisible, setPopupVisible] = useState(false);


                const openPopup = () => {
                    setPopupVisible(true);
                    
                  };
                
                  const closePopup = () => {
                    setPopupVisible(false);
                    

                    
                  };
                
                  const LastClick = () => {
                    openModal();

                    
                  };
                  const scrollToTop = () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                };
                

                
    return (
        <div className="Home">
            
            <h5> </h5>
            <h2>: שכר דירה לשותף בחודש</h2>
               <body>


            <p>
            
            <button
            /*                    onClick={handC=> setK(k + 0.1)} handC12*/
                    onClick={handC}
                     className={`btn ${(changeColor === true)? 'btn' : 'special'}`} 
            >2000+</button>

            <button 
            
            onClick={handC1}
                     className={`btn ${(changeColor1 === true)? 'btn' : 'special'}`} > 
                     1600-2000
                
            </button>


           
            <button 
            
            onClick={handC2}
                     className={`btn ${(changeColor2 === true)? 'btn' : 'special'}`} > 
                     1600-1200
                
            </button>

            <button 
            
            onClick={handC3}
                     className={`btn ${(changeColor3 === true)? 'btn' : 'special'}`} > 
                     עד 1200
                
            </button>

            </p>
            </body>
            <h5> </h5>

            
            
            <h2> : מספר שותפים</h2>
        

            





            <body>
            <button
                    onClick={handC5}
                     className={`btn ${(changeColor5 === true)? 'btn' : 'special'}`} 
            >4</button>

            <button 
            
            onClick={handC6}
                     className={`btn ${(changeColor6 === true)? 'btn' : 'special'}`} > 
                     3
                
            </button>


           
            <button 
            
            onClick={handC7}
                     className={`btn ${(changeColor7 === true)? 'btn' : 'special'}`} > 
                     2
                
            </button>

            <button 
            
            onClick={handC8}
                     className={`btn ${(changeColor8 === true)? 'btn' : 'special'}`} > 
                     יחיד
                
            </button>

            
            </body>

            <h5> </h5>



            <h2>: אני גר בשכונה</h2>
            <p></p>

            <body>


            <button
                    onClick={handC9}
                     className={`btn ${(changeColor9 === true)? 'btn' : 'special'}`} 
            >ו</button>

            <button 
            
            onClick={handC10}
                     className={`btn ${(changeColor10 === true)? 'btn' : 'special'}`} > 
                     ד
                
            </button>


           
            <button 
            
            onClick={handC11}
                     className={`btn ${(changeColor11 === true)? 'btn' : 'special'}`} > 
                     ג
                
            </button>

            <button 
            
            onClick={handC12}
                     className={`btn ${(changeColor12 === true)? 'btn' : 'special'}`} > 
                     ב
                
            </button>




            </body>
  



         
            <h2>:בניין או קרקע</h2>



            <body2>
            <button
                    onClick={handC18}
                     className={`btn ${(changeColor18 === true)? 'btn' : 'special'}` } 
            >קרקע</button>
            

            <button 
            
            onClick={handC19}
                     className={`btn ${(changeColor19 === true)? 'btn' : 'special'}` } > 
                    בניין
                
            </button>


           
            </body2>


            {/* <h5> יש מעלית?</h5>
            <h5> </h5>




            <h5> יש מעלית?</h5>
            <h5> </h5> */}



            <h2>:חצר או מרפסת</h2><h5> </h5>
            <body3>



            <button 
            
            onClick={handC20}
                     className={`btn ${(changeColor20 === true)? 'btn' : 'special'}`} > 
                          אין     
                
            </button>

            <button 
            
            onClick={handC21}
                     className={`btn ${(changeColor21 === true)? 'btn' : 'special'}`} > 
                       מרפסת  
                
            </button>

            <button 
            
            onClick={handC22}
                     className={`btn ${(changeColor22 === true)? 'btn' : 'special'}`} > 
                          חצר     
                
            </button>

            
            </body3>


            <h5> </h5>
            <h2>:מרחק מהאוניברסיטה</h2><h5> </h5>


            <body>


            <button
                    onClick={handC23}
                     className={`btn ${(changeColor23 === true)? 'btn' : 'special'}`} 
                     >250 מטר</button>

            <button 
            
            onClick={handC24}
                     className={`btn ${(changeColor24 === true)? 'btn' : 'special'}`} > 
                      1 קילומטר
                
            </button>


           
            <button 
            
            onClick={handC25}
                     className={`btn ${(changeColor25 === true)? 'btn' : 'special'}`} > 
                    2 קילומטר
                
            </button>

            <button 
            
            onClick={handC26}
                     className={`btn ${(changeColor26 === true)? 'btn' : 'special'}`} > 
                        מנוי לרב קו                
                
            </button>




            </body>



            <h2> 
                   :הבר הכי קרוב אליי ממוקם</h2>
            
            <body3>


            <button
                    onClick={handC27}
                     className={`btn ${(changeColor27 === true)? 'btn' : 'special'}`} 
            >יש הליכה</button>

            <button 
            
            onClick={handC28}
                     className={`btn ${(changeColor28 === true)? 'btn' : 'special'}`} > 
                        דקות 5               
            </button>


           
            <button 
            
            onClick={handC29}
                     className={`btn ${(changeColor29 === true)? 'btn' : 'special'}`} > 
                     מתחת לבית
                
            </button>

           



            </body3>

    
            <h2>:כמה מטר הדירה</h2>



            <body>


            <button
                    onClick={handC30}
                     className={`btn ${(changeColor30 === true)? 'btn' : 'special'}`} 
            >    עד 60 מטר               
             </button>

            <button 
            
            onClick={handC31}
                     className={`btn ${(changeColor31 === true)? 'btn' : 'special'}`} > 
                      60 - 80 
                
            </button>


           
            <button 
            
            onClick={handC32}
                     className={`btn ${(changeColor32 === true)? 'btn' : 'special'}`} > 
                   80 - 120
                
            </button>

            <button 
            
            onClick={handC33}
                     className={`btn ${(changeColor33 === true)? 'btn' : 'special'}`} > 
                        120 +              
            </button>




            </body>



            <h5> </h5>
            <h2>:מספר חדרי שירותים</h2>


            <body3>


<button
        onClick={handC34}
         className={`btn ${(changeColor34 === true)? 'btn' : 'special'}`} 
>1</button>

<button 

onClick={handC35}
         className={`btn ${(changeColor35 === true)? 'btn' : 'special'}`} > 
         2              
</button>



<button 

onClick={handC36}
         className={`btn ${(changeColor36 === true)? 'btn' : 'special'}`} > 
        3 +

</button>





</body3>




            <h5> </h5>

            <h2>:אקסלוסייב</h2>
            <h5> </h5>
            <body>


<button
        onClick={handC37}
         className={`btn ${(changeColor37 === true)? 'btn' : 'special'}`} 
>בריכה</button>

<button 

onClick={handC38}
         className={`btn ${(changeColor38 === true)? 'btn' : 'special'}`} > 
         מקלחת בחדר
    
</button>



<button 

onClick={handC39}
         className={`btn ${(changeColor39 === true)? 'btn' : 'special'}`} > 
         חדר כושר
    
</button>

<button 

onClick={handC40}
         className={`btn ${(changeColor40 === true)? 'btn' : 'special'}`} > 
         יציאה לגג
    
</button>







</body>

            
            <h5> </h5>



{/* <button 

onClick={handC41}
         className={`btn ${(changeColor41 === true)? 'btn' : 'special'}`} > 
         יציאג
    
</button>
                <button onClick={() => {SecondHandle('Mr White !')}} href="javascript:void(0)"
                className="btn">בריכה</button >
            <button className="btn">חדר כושר</button>
            <button className="btn">יציאה לגג</button> */}



<p>{}</p>

                

            <h5> </h5>
            <h5> </h5>
            <h5> </h5>
            <h5> </h5>

         
            <Modal  
                 isOpen={isModalOpen}
                 onRequestClose={closeModal}
                 contentLabel="Example Modal"
                 style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                      width: '25%', // Adjust the width as needed
                      margin: 'auto',
                    },
                  }}
                 >
                    
  <div style={{ textAlign: 'left', color: 'goldenrod' }}>
    <h1>הדירוג שלך הוא {}</h1>
    {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= Math.floor(k) ? "filled" : ""}>
            ★
        </span>
    )).slice(0, Math.floor(k))}    
    <h5>  {}  </h5>
    </div>
    <div>
    <button onClick={closeModal} className={`btn ${(changeColor40 === true) ? 'btn' : 'special'}`}>בדוק מחדש</button>

    </div>



</Modal>


    
    

<button onClick={handC41}className={`btn ${(changeColor40 === true)? 'btn' : 'special'}`}>בדוק</button>
{isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>הדירוג שלך הוא ★</p>
            
          </div>
        </div>
      )}


        </div>
      );
}
 
export default Home;


