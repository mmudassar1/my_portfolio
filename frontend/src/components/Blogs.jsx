import React from 'react';
import { Link } from 'react-router-dom';

export const blogData = [
    {
        id: 1,
        title: "Mastering Modern Web Performance: A Deep Dive into MERN",
        excerpt: "Learn how to optimize your MongoDB queries, Express middleware, and React rendering to build lightning-fast web applications.",
        date: "April 10, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
        content: [
            {
                type: 'paragraph',
                text: 'In today\'s digital landscape, performance is not just a feature; it\'s a fundamental requirement. Users expect web applications to be responsive, smooth, and near-instantaneous. When working with the MERN stack—MongoDB, Express, React, and Node.js—the potential for high performance is immense, but so are the pitfalls that can lead to sluggish user experiences.'
            },
            {
                type: 'heading',
                text: 'The Database Bottleneck: MongoDB Optimization'
            },
            {
                type: 'paragraph',
                text: 'One of the most common performance killers in MERN apps is inefficient database queries. As your data grows, simple queries that were fast during development can become catastrophic bottlenecks. The primary solution is strategic indexing. Without indexes, MongoDB must perform a total collection scan, which is O(n) complexity. With an index, this becomes O(log n).'
            },
            {
                type: 'code',
                code: '// Example: Creating a compound index for partial text search and status\nuserSchema.index({ username: "text", active: 1 });\n\n// Optimization: Using .lean() for read-only queries\nconst users = await User.find({ active: true }).lean();'
            },
            {
                type: 'paragraph',
                text: 'Using `.lean()` is a game-changer for read-heavy operations. By default, Mongoose returns full Mongoose Documents, which have a lot of internal state for change tracking. `.lean()` tells Mongoose to skip this and return plain JavaScript objects, significantly reducing memory consumption and CPU usage.'
            },
            {
                type: 'heading',
                text: 'Server-Side Efficiency: Express and Node.js'
            },
            {
                type: 'paragraph',
                text: 'Node.js is incredibly efficient due to its non-blocking I/O model, but it\'s still single-threaded for execution. Blocking the event loop with heavy computations can freeze your entire server. For high-traffic applications, implementing Redis caching for frequently accessed but rarely changed data (like user profiles or settings) can reduce database load by up to 80%.'
            },
            {
                type: 'heading',
                text: 'Client-Side Polish: React Rendering'
            },
            {
                type: 'paragraph',
                text: 'On the frontend, React\'s virtual DOM is fast, but unnecessary re-renders can still cause lag. Using `React.memo` for static components and `useMemo` or `useCallback` for expensive calculations and stable references is essential in complex dashboards.'
            },
            {
                type: 'paragraph',
                text: 'In conclusion, a performant MERN app is built on a foundation of smart database design, efficient server logic, and mindful frontend state management. By focusing on these areas, you can build applications that feel premium and respect the user\'s time.'
            }
        ]
    },
    {
        id: 2,
        title: "The Future of Serverless: Deploying Edge Functions with Next.js",
        excerpt: "Explore how Edge Computing is changing the way we think about latency and global distribution for modern web apps.",
        date: "April 05, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
        content: [
            {
                type: 'paragraph',
                text: 'The evolution of web deployment has moved from physical servers to Virtual Machines, then to Containers, and finally to Serverless. Today, we are witnessing the next phase: Edge Computing. Edge functions allow you to run backend logic as close to the user as possible, effectively reducing the latency caused by geographical distance.'
            },
            {
                type: 'heading',
                text: 'What are Edge Functions?'
            },
            {
                type: 'paragraph',
                text: 'Unlike traditional serverless functions (like AWS Lambda) that run in a specific regional data center, Edge Functions run on a global network of servers. When a user in Tokyo makes a request, it\'s handled by a server in Tokyo, not one in Northern Virginia. This transforms the "cold start" problem and provides near-instant execution.'
            },
            {
                type: 'heading',
                text: 'Next.js Middleware and the Edge Runtime'
            },
            {
                type: 'paragraph',
                text: 'Next.js has embraced this shift with its Edge Runtime. Using Middleware, you can perform tasks like authentication checks, A/B testing, and geolocation-based redirects before a page even starts to render.'
            },
            {
                type: 'code',
                code: '// middleware.ts\nimport { NextResponse } from "next/server";\nimport type { NextRequest } from "next/server";\n\nexport function middleware(request: NextRequest) {\n  const country = request.geo?.country || "US";\n  if (country === "GB") {\n    return NextResponse.rewrite(new URL("/uk-promo", request.url));\n  }\n}'
            },
            {
                type: 'paragraph',
                text: 'However, the Edge Runtime is a restricted environment. You don\'t have access to the full Node.js API (like `fs` or `net`), which encourages more lightweight and efficient code patterns. This constraint leads to better overall architecture and faster response times.'
            },
            {
                type: 'heading',
                text: 'Cost and Scalability'
            },
            {
                type: 'paragraph',
                text: 'One of the biggest advantages of serverless at the edge is the cost model. You pay only for what you use, and because the execution environment is so lightweight, the cost per request is significantly lower than maintaining dedicated server clusters. For startups and enterprise applications alike, the combination of speed and cost-efficiency is hard to beat.'
            }
        ]
    },
    {
        id: 3,
        title: "Mastering React Hooks: Advanced Patterns and Common Pitfalls",
        excerpt: "Go beyond useState and useEffect. Discover custom hooks and optimization patterns for enterprise-grade React applications.",
        date: "March 28, 2026",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
        content: [
            {
                type: 'paragraph',
                text: 'React Hooks revolutionized how we write components, moving us away from the complexity of Class components into a functional world. However, as applications grow, simple hooks can lead to complex bugs if not understood deeply. Let\'s explore some advanced patterns that separate senior developers from the rest.'
            },
            {
                type: 'heading',
                text: 'The Power of Custom Hooks'
            },
            {
                type: 'paragraph',
                text: 'The true power of hooks lies in their composability. Custom hooks allow you to extract component logic into reusable functions. Instead of having a component handle API fetching, loading states, and error handling, you can encapsulate that into a `useApi` hook.'
            },
            {
                type: 'code',
                code: 'function useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const saved = localStorage.getItem(key);\n    return saved !== null ? JSON.parse(saved) : initialValue;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue];\n}'
            },
            {
                type: 'heading',
                text: 'Understanding Dependency Arrays'
            },
            {
                type: 'paragraph',
                text: 'The dependency array in `useEffect`, `useMemo`, and `useCallback` is where most bugs live. A common mistake is omitting dependencies or including objects that are recreated on every render, leading to infinite loops. Always use the ESLint plugin for hooks to catch these issues early.'
            },
            {
                type: 'heading',
                text: 'When to Use useReducer'
            },
            {
                type: 'paragraph',
                text: 'While `useState` is great for simple pieces of state, `useReducer` is superior for complex state objects where the next state depends on the previous one, or when multiple pieces of state change together. It provides a more predictable way to handle complex business logic within your components.'
            },
            {
                type: 'paragraph',
                text: 'Mastering hooks is about understanding the lifecycle of a functional component. By mastering these patterns, you can write cleaner, more maintainable, and highly performant React code.'
            }
        ]
    }
];

const Blogs = () => {
    return (
        <section className="py-20 max-w-[1400px] mx-auto px-6 md:px-8 overflow-hidden" id="blogs">
            <h2 className="text-4xl text-center mb-12 font-bold text-white">Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">Articles</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                {blogData.map(blog => (
                    <Link to={`/blog/${blog.id}`} key={blog.id} className="glow-card group block">
                        <div className="glow-card-bg"></div>
                        <div className="glow-card-content overflow-hidden">
                            <img src={blog.image} alt={blog.title} loading="eager" className="w-full h-[200px] object-cover border-b border-white/10" />
                            <div className="p-6">
                                <div className="flex gap-4 text-[#9ca3af] text-[0.85rem] mb-2">
                                    <span>📅 {blog.date}</span>
                                    <span>⏱️ {blog.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{blog.title}</h3>
                                <p className="text-[#9ca3af] mb-6 line-clamp-2">{blog.excerpt}</p>
                                <span className="inline-block text-white border-b border-[#22d3ee] pb-0.5 group-hover:text-[#22d3ee] group-hover:border-white transition-all">Read More →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
