import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public leftMenuToggle: boolean = false;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'home', type: 'link', active: true, path: '/home'
		},
		{
			title: 'about', type: 'link', active: false, path: '/pages/aboutus'
		},
		{
			title: 'products', type: 'link', path: '/shop/collection/left/sidebar', active: true
		},
		{
			title: 'gallery', type: 'link', active: true, path: '/pages/aboutus'
		},
		{
			title: 'contact us', type: 'link', active: true, path: '/pages/contact'
		}, 
		// {
		// 	title: 'pages', type: 'sub', active: false, children: [
		// 		{
		// 			title: 'account', type: 'sub', active: false, children: [
		// 				{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
		// 				{ path: '/pages/cart', title: 'cart', type: 'link' },
		// 				{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
		// 				{ path: '/pages/login', title: 'login', type: 'link' },
		// 				{ path: '/pages/register', title: 'register', type: 'link' },
		// 				{ path: '/pages/contact', title: 'contact', type: 'link' },
		// 				{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
		// 				{ path: '/pages/profile', title: 'profile', type: 'link' },
		// 				{ path: '/pages/checkout', title: 'checkout', type: 'link' },
		// 			]
		// 		},
		// 		{ path: '/pages/aboutus', title: 'about-us', type: 'link' },
		// 		{ path: '/pages/search', title: 'search', type: 'link' },
		// 		{ path: '/pages/typography', title: 'typography', type: 'link', badge: true, badgeText: 'new' },
		// 		{ path: '/pages/review', title: 'review', type: 'link', badge: true, badgeText: 'new' },
		// 		{ path: '/pages/order/success', title: 'order-success', type: 'link' },
		// 			{ 
		// 				title: 'compare', type: 'sub', active: false, children: [
		// 					{ path: '/pages/compare/one', title: 'compare-1', type: 'link' },
		// 					{ path: '/pages/compare/two', title: 'compare-2', type: 'link', badge: true, badgeText: 'new' }
		// 				]
		// 			},
		// 		{ path: '/pages/collection', title: 'collection', type: 'link' },
		// 		{ path: '/pages/lookbook', title: 'lookbook', type: 'link' },
		// 		{ path: '/pages/404', title: '404', type: 'link' },
		// 		{ path: '/pages/comingsoon', title: 'coming-soon', type: 'link', badge: true, badgeText: 'new' },
		// 		{ path: '/pages/faq', title: 'faq', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'blogs', type: 'sub', active: false, children: [
		// 		{ path: '/pages/blog/left/sidebar', title: 'left-sidebar', type: 'link' },
		// 		{ path: '/pages/blog/right/sidebar', title: 'right-sidebar', type: 'link' },
		// 		{ path: '/pages/blog/no/sidebar', title: 'no-sidebar', type: 'link' },
		// 		{ path: '/pages/blog/details', title: 'blog-details', type: 'link' }
		// 	]
		// }
	];

	LEFTMENUITEMS: Menu[] = [
		{
			title: 'clothing', type: 'sub', megaMenu: true, active: false, children: [
			  {
				  title: 'mens fashion',  type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'top',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'shirts',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' }
				  ]
			  },
			  {
				  title: 'women fashion',  type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'dresses',  type: 'link' },
					  { path: '/home/fashion', title: 'skirts',  type: 'link' },
					  { path: '/home/fashion', title: 'westarn wear',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom wear',  type: 'link' }
				  ]
			  },
			]
		},
		{
			title: 'bags', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'shopper bags', type: 'link' },
			  { path: '/home/fashion', title: 'laptop bags', type: 'link' },
			  { path: '/home/fashion', title: 'clutches', type: 'link' },
			  {
				  path: '/home/fashion', title: 'purses', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'purses',  type: 'link' },
					  { path: '/home/fashion', title: 'wallets',  type: 'link' },
					  { path: '/home/fashion', title: 'leathers',  type: 'link' },
					  { path: '/home/fashion', title: 'satchels',  type: 'link' }
				  ]
			  },
			]
		},
		{
			title: 'footwear', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'sport shoes', type: 'link' },
			  { path: '/home/fashion', title: 'formal shoes', type: 'link' },
			  { path: '/home/fashion', title: 'casual shoes', type: 'link' }
			]
		},
		{
			path: '/home/fashion', title: 'watches', type: 'link'
		},
		{
			title: 'Accessories', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'fashion jewellery', type: 'link' },
			  { path: '/home/fashion', title: 'caps and hats', type: 'link' },
			  { path: '/home/fashion', title: 'precious jewellery', type: 'link' },
			  {
				  path: '/home/fashion', title: 'more..', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'necklaces',  type: 'link' },
					  { path: '/home/fashion', title: 'earrings',  type: 'link' },
					  { path: '/home/fashion', title: 'rings & wrist wear',  type: 'link' },
					  {
						  path: '/home/fashion', title: 'more...',  type: 'link', active: false, children: [
							  { path: '/home/fashion', title: 'ties',  type: 'link' },
							  { path: '/home/fashion', title: 'cufflinks',  type: 'link' },
							  { path: '/home/fashion', title: 'pockets squares',  type: 'link' },
							  { path: '/home/fashion', title: 'helmets',  type: 'link' },
							  { path: '/home/fashion', title: 'scarves',  type: 'link' },
							  {
								  path: '/home/fashion', title: 'more...',  type: 'link', active: false, children: [
									  { path: '/home/fashion', title: 'accessory gift sets',  type: 'link' },
									  { path: '/home/fashion', title: 'travel accessories',  type: 'link' },
									  { path: '/home/fashion', title: 'phone cases',  type: 'link' }
								  ]
							  },
						]
					  }
				  ]
			  },
			]
		},
		{
			path: '/home/fashion', title: 'house of design', type: 'link'
		},
		{
			title: 'beauty & personal care', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'makeup', type: 'link' },
			  { path: '/home/fashion', title: 'skincare', type: 'link' },
			  { path: '/home/fashion', title: 'premium beaty', type: 'link' },
			  {
				  path: '/home/fashion', title: 'more..', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'fragrances',  type: 'link' },
					  { path: '/home/fashion', title: 'luxury beauty',  type: 'link' },
					  { path: '/home/fashion', title: 'hair care',  type: 'link' },
					  { path: '/home/fashion', title: 'tools & brushes',  type: 'link' }
				  ]
			  },
			]
		},
		{
			path: '/home/fashion', title: 'home & decor', type: 'link'
		},
		{
			path: '/home/fashion', title: 'kitchen', type: 'link'
		}
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

}
