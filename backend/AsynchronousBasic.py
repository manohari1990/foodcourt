import asyncio
import aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/hgh",
        "https://jsonplaceholder.typicode.com/users"
    ]
    
    try:
        tasks = [fetch(url) for url in urls]
        res = await asyncio.gather(*tasks)
        for r in res:
            print(r)
    except Exception as e:
        print(str(e))
        
asyncio.run(main())
