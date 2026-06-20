import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Nama Kamu';
    const subtitle = searchParams.get('subtitle') || 'Frontend Developer';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#09090b',
            backgroundImage: 'linear-gradient(to bottom right, #09090b, #18181b)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '40px',
                color: '#a1a1aa',
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}