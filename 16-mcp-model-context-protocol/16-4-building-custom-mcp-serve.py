# mcp_server.py
from mcp.server import Server
from mcp.server.stdio import stdio_server

server = Server("my-python-server")

@server.tool()
async def my_tool(param1: str, param2: int = 0) -> str:
    """Does something useful with the provided input.
    
    Args:
        param1: First parameter (required)
        param2: Optional number parameter
    """
    result = await process_input(param1, param2)
    return json.dumps(result)

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())