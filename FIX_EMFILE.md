# Fix EMFILE Error (Too Many Open Files)

macOS এ file watcher limit কম হওয়ার কারণে এই error হয়।

## Quick Fix (Temporary)

Terminal এ run করুন:

```bash
ulimit -n 10240
npm run dev
```

## Permanent Fix

### Option 1: Add to ~/.zshrc or ~/.bash_profile

```bash
echo "ulimit -n 10240" >> ~/.zshrc
source ~/.zshrc
```

### Option 2: Use launchctl (macOS)

```bash
sudo launchctl limit maxfiles 10240 524288
```

### Option 3: Create /etc/launchd.conf (requires restart)

```bash
echo "limit maxfiles 10240 524288" | sudo tee -a /etc/launchd.conf
```

## What We've Done

1. ✅ Updated `next.config.js` to exclude old directories from watching
2. ✅ Cleared `.next` cache
3. ✅ Created `.watchmanconfig` to ignore unnecessary directories
4. ✅ Fixed `output: 'export'` to only use in production

## Next Steps

1. Run `ulimit -n 10240` in your terminal
2. Run `npm run dev` again
3. If still having issues, restart your terminal or computer

