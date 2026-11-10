// Build / dev-server script.
//   node tools/build.mjs           → production bundle (dist/app.js)
//   node tools/build.mjs --dev     → watch + serve on http://127.0.0.1:5173
//   node tools/build.mjs --serve   → build once, then serve
import * as esbuild from 'esbuild';

const dev = process.argv.includes('--dev');
const serve = dev || process.argv.includes('--serve');
const port = Number(process.env.PORT || 5173);

const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/app.js',
  target: ['es2020'],
  minify: !dev,
  sourcemap: dev ? 'inline' : false,
  legalComments: 'eof',
  logLevel: 'info',
};

if (serve) {
  const ctx = await esbuild.context(options);
  if (dev) await ctx.watch(); else await ctx.rebuild();
  // Bind to loopback only: this is a local preview server.
  const { hosts, port: p } = await ctx.serve({ servedir: '.', host: '127.0.0.1', port });
  console.log(`\n  青島八大關 → http://${hosts?.[0] ?? '127.0.0.1'}:${p}/\n`);
} else {
  await esbuild.build(options);
}
