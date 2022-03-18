# Pure-react-3d-carousel
This is a simple react carousel without dependencies on third-party libraries.
It uses react functional components.
![react-carousel](https://i.postimg.cc/htSskJ9k/carousel.png)

## Installation
Where you need to use the carousel add

    import  Carousel  from  "./Carousel";
    
    function App() {
	 return  <Carousel  initialActiveId={1} slidesArr={slidesArr} />	
    }
As you can see, Carousel requires two props.

 - **slidesArr** is an array of object you have to create. Every object needs two properties: "id" and "content" *(if you're mapping data you'll also need "key"*).
	 
	 - **"id"** requires a numeric ID (*use numbers starting from 1 and up, in ascending order or if your array is the result of mapping some
   data, use*  	  `id:  i  +  1`),
   	-  **"content"** is the content of each slide. They can be images, other react components etc...
 - **initialActiveId** is the ID of the first item of your array (*usually 1*)

##  slidesArr
Here is an example of array.
Please note that the content of each of your slide must be wrapped inside an element (for example  < div >) with a class "card-container", later in this doc we'll see how.

    import  Carousel  from  "./Carousel";
  
    function App() {
		const slidesArr = [
		    {
			    id: 1,
			    content: 
			    <div className="card-container"> 
				    <div class="card">
					    <img src="./example1>
					    <p>This is just an example </p>
				    </div>
			    </div>
		    },
		    {
			    id: 2,
			    content: 
			    <div className="card-container"> 
				    <div class="card">
					    <img src="./example2.png">
					    <p>This is just an example </p>
				    </div>
			    </div>
		    },
		    {
			    id: 3,
			    content: 
			    <div className="card-container"> 
				    <div class="card">
					    <img src="./example3.png">
					    <p>This is just an example </p>
				    </div>
			    </div>
		    }    
		]
		
		return <Carousel  initialActiveId={1} slidesArr={slidesArr} />
		
    }

## Customization

### CSS

The following is the default CSS for "card-container", 
but if these sizes don't fit for your project, just add this code in your CSS and override these properties with your custom sizes.

I used a specific "minwidth" equal to "maxwidth", because I needed to have slides with specific dimension that didn't "stretch" the content, and setting only the width didn't work for me.

*If you want to try you can use only "width", but remember to override maxwidth and minwidth with "unset"*

    .card-container {
		max-width: 330px;
		min-width: 330px;
    }
    
    @media (max-width: 499px) {
	    .card-container {
	       max-width: 290px;
	       min-width: 290px;
	    }
    }

Besides there is also an important class "*.slider*", which is the parent container of the slides that needs a specific height.
It's by default 500px, but you can override it, if you need.

    .slider {
	    padding: 0  0.5rem;
	    display: flex;
	    margin: 0  auto;
	    width: 100%;
	    height: 500px; /* Set always an height for the slider*/
	    justify-content: center;
	    align-items: center;
	    position: relative;
	   }
	   
For further customization you can find a sandbox demo at the end, where you can see the whole css document.

## Structure
The structure of the carousel is : 

        .slider
	    	.slide
		    .card-container
			    {your_content}
		.slide
		    .card-container
			    {your_content}
		.slide
		    .card-container
			    {your_content}
				

## Mobile Version
In my opinion the 3d carousel is great on desktop, but it doesn't perform well on mobile.
Personally I prefer to use a simple swipable carousel and this is what I used in this project.

![react-carousel-mobile](https://i.postimg.cc/V6NRH5CY/carousel-m.png)

You need to use another div and add the classes ".cards-mobile-container" and ".flex" to your div.
These are the default properties of these classes.


    .flex {
	    display: flex;
	    flex-direction: row;
	    column-gap: 1rem;
    }

    .cards-mobile-container {
	    -webkit-overflow-scrolling: touch;
	    overflow-x: scroll;
	    overflow-y: hidden;
	    width: 100%;
    }

If you are using a UI library like MUI o Chakra, you just have to use the Stack component (HStack, in this case ) + ".cards-mobile-container".

    <HStack className="cards-mobile-container" spacing="1rem">
        {slides}
    </HStack>

Inside the div or Stack add the "content" value of slidesArr. 

You can just map through it.

`const slides =  slidesArr.map( el =>  <div key={put-unique-id-here}>{el.content}</div>)`

At the end you should use conditional rendering in your return

    return  (
		  <>
		    {isTablet ? 
			    (<Carousel  initialActiveId={1} slidesArr={slidesArr} />) : 
			    (<div  className="flex cards-mobile-container">
				    {slides}
			    </div >)
		   }
		  </>
    );

*isTablet* is a media query I created using Chakra UI

    const  [isTablet] =  useMediaQuery("(min-width: 500px)");

 
## Demo

Here you can find an example I created using Chakra UI to build some cards to use as slides.
[React-carousel-cards-codesandbox](https://codesandbox.io/s/pure-react-3d-carousel-responsive-j4ch91?file=/src/App.js:2537-2544)

Here instead you can find a very simple example in plain JS, using some images as slides.
[React-carousel-img-codesandbox](https://codesandbox.io/s/react-img-carousel-responsive-ep90rv?file=/src/App.js)

