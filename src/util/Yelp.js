
const apiKey = 'J9ufEKq5Mowoe9TPuaLPsHYta9gXY5M255caD9-ivD6DvhEwG-ONDaqc4ElYWWlH2KuFoKvNOskntzO6x-rCkJDplAIk8ZbM0pbp_lX_rlNfjh-QBCc_PGPRLx-fYnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
          { headers: {Authorization: `Bearer ${apiKey}`} }).then(response => response.json()).then(jsonResponse => { //look guidance video on 7:40  (add braces to argument?)
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      address: business.location.address1,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zip_code,
                      category: business.categories[0].title,
                      rating: business.rating,
                      reviewCount: business.review_count
                    };
                }));
            }
          }); //look at hint in step 14 with response.json()
    }
}


export default Yelp;