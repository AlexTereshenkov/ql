a.b.c;
a?.b.c;
a.b?.c;
a?.b?.c;

f()();
f?.()();
f()?.();
f?.()?.();

a.m().b;
a?.m().b;
a.m?.().b;
a.m()?.b;
a?.m?.()?.b;

// semmle-extractor-options: --experimental
