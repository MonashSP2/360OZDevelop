import React from 'react';
import './UsefulInfo.css';
import UsefulllinksButtons from './Usefullinksbuttons';

const UsefulInfoCampus =()=>{
    return (
      <div>
        <UsefulllinksButtons />

        <div id="infoContainer">
        <h3>
          Housing On and Off Campus
        </h3>
        <p>
          Australia has a large range of accommodation options available to international students. With choices ranging from university accommodation or homestay to self-catered apartments or share houses, there's an option to suit every personality and budget.
        </p>
        <p>
          Below are a few links to help you find the best accommodation:
        </p>
          <ul id="infoLink">
          <li><a href="https://www.monash.edu/accommodation/accommodation/on-campus-options">Monash On Campus Accommodation </a>- From shared and single rooms on-campus, to tips for renting your own place, Monash University is here to help.</li>
          <li><a href="https://www.realestate.com.au/rent">Real Estate </a>- realestate.com.au is Australia's No.1 property site for real estate. Find the latest homes for sale and rent as well as property news & real estate market data.</li>
          <li><a href="https://www.raywhite.com/ ">Ray White</a> - Ray White is a household name in Australasia, a name synonymous with property and real estate industry</li>
          <li><a href="https://www.rent.com.au/">Rent.com.au </a>- Rent.com.au will help you find the right place quickly, efficiently and effectively. Focusing exclusively on the rental market for Australia's growing number of renters.</li>
          <li><a href="https://www.domain.com.au/">Domain.com.au </a>- Domain Group offers an ecosystem of leading multi-platform property solutions. Through Domain, Allhomes and Commercial Real Estate, they deliver property marketing solutions for residential, new development and commercial properties, plus the latest market intel that attracts qualified buyers, sellers, renters and investors to listings.</li>
          <li><a href="https://www.gumtree.com.au/s-real-estate/c9296">Gumtree</a>  - Gumtree connects buyers and sellers in the local community, with more than 2.5 million listings across hundreds of categories you can buy, sell and find just about everything. With 85,000 new ads being posted each day, in categories that include: Home & Garden, Baby & Children, Sport & Fitness, Clothing & Jewellery as well as Gumtree Cars and Gumtree Jobs.</li>
          </ul>
        </div>
      </div>
    )
}
export default UsefulInfoCampus;
