const path = require('path');
const { spawn } = require('child_process');

const nuxtDir = path.resolve(__dirname, '../frontend-nuxt');
const nuxtBin = path.join(nuxtDir, 'node_modules/.bin/nuxt');

console.log('[STIRE-Soft] Iniciando frontend Nuxt en MODO DEMO (0.0.0.0:3000)...');

const child = spawn(nuxtBin, ['dev', '--host', '0.0.0.0', '--port', '3000'], {
  cwd: nuxtDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: '3000',
    HOST: '0.0.0.0',
    NUXT_PUBLIC_DEMO_MODE: 'true',
    NUXT_PUBLIC_API_BASE: '',
  },
});

child.on('exit', (code) => {
  process.exit(code || 0);
});

child.on('error', (err) => {
  console.error('[STIRE-Soft] Error al iniciar Nuxt:', err);
  process.exit(1);
});
