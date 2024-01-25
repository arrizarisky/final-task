<template>
  <div class="container">
    <div class="background"></div>
    <div class="product">
      <div class="gallery">
        <img src="../assets/man_clothes-removebg-preview.png" alt="Product Image">
      </div>
        <div class="product-details">
          <h2 class="product-title">Mens Casual Slim Fit</h2>
          <div class="product-rating">
            <div class="title-rate">
              <p>Men's Clothing</p>
            </div>
            <div class="rate">
              <p>2.9/5</p>
              <div class="icon">
                <box-icon  type="solid" name="circle" size="sm"></box-icon>
                <box-icon  type="solid" name="circle" size="sm"></box-icon>
                <box-icon  type="solid" name="circle" size="sm"></box-icon>
                <box-icon name="circle" size="sm"></box-icon>
                <box-icon name="circle" size="sm"></box-icon>
              </div>
            </div>
           </div>
           <p class="product-info">great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.
           </p>
           <div class="toggle">
             <p class="product-price">$29.95</p>
             <div class="button">
               <button class="buy-button">Buy now</button>
               <button class="next-button">Next product</button>
             </div>
           </div>
        </div>
      </div>
  </div>
</template>

<script>
import 'boxicons';

export default {
    name: 'manDisplay'
}
</script>

<style scoped>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.container {
  background-color: #FDE2FF;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  width: 100%;
  height: 80vh;
  background-color: #fff;
  position: relative;
  top: 60%;
}

.product {
  display: flex;
  width: 70%;
  height: 580px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.25);
  position:absolute;
  }
  
  .product-details {
    padding: 3.75rem;
  }

  .gallery {
    padding: 1rem;
    width: 40%;

  }
  .gallery img {
    width: 100%;
    height: auto;
  }
  
  .product-title {
  width: 50%;
  color: #720060;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  }
  
  .product-rating {
    display: flex;
    margin-top: 2.5rem;
    justify-content: space-between;
    padding-top: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  }

  .rate {
    display: flex; /* Arrange elements horizontally */
    align-items: center; /* Vertically center elements */
    border-top: 1px rgba(0, 0, 0, 0.20);
  }
  
  .rate p {
    margin-right: 10px; /* Adjust spacing as needed */
  }
  
  .rate .icon {
    display: flex; /* Arrange icons horizontally */
  }
  
  .rate .icon box-icon {
    margin-left: 2px; /* Adjust spacing between icons */
  }

  .icon box-icon {
    color: #720060;
  }
  

  .product-info {
    width: 517px;
    height: 163px;
    flex-shrink: 0;
    color: #1E1E1E;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
    text-align:justify;
  }
  
  .toggle {
    margin-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.20);
  } 

  .button {
    display: flex;
    justify-content: space-between;
  }
  .product-price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-start;
    color: #720060;
    padding-top: 12px;
  }
  
  .buy-button, .next-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #720060;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 50%;
    font-weight: bold;
  }
  
  .buy-button {
    margin-right: 1rem;
    color: #fff;
  }
  
  .buy-button:hover {
    background-color: #720060;
  }
  
  .next-button {
    margin-left: auto;
    border: 3px solid #720060;
    background: #fff;
    color: #720060;
  }
  
  .next-button:hover {
    background-color: #720060;
    color: #fff;
  }
</style>