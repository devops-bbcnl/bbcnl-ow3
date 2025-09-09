import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://bubblebarrel.dev';
	const now = new Date();

	// Main pages
	const mainPages = [
		'', // Homepage
		'about',
		'services',
		'contact',
		'privacy',
		'terms',
		'cookies',
		'unsubscribe',
	];

	// Brand pages
	const brandPages = [
		'gobuyme',
		'loadrunner-logistics',
		'uget-delivery',
		'usekwu',
	];

	// Generate sitemap entries for main pages
	const mainPageEntries = mainPages.map((page) => ({
		url: `${baseUrl}${page ? `/${page}` : ''}`,
		lastModified: now,
		changeFrequency: 'weekly' as const,
		priority: page === '' ? 1 : 0.8, // Homepage has highest priority
	}));

	// Generate sitemap entries for brand pages
	const brandPageEntries = brandPages.map((brand) => ({
		url: `${baseUrl}/brands/${brand}`,
		lastModified: now,
		changeFrequency: 'weekly' as const,
		priority: 0.7,
	}));

	// Combine all entries
	return [...mainPageEntries, ...brandPageEntries];
}
