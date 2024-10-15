1. By default a node application runs on a single core.
2. In the app, if we hit the `/heavy` route, no other route works (until it finishes).
   - Would be so much better if `/heavy` in runs in one core and other routes on another core.
3. Clustering is the way to run a node application, in multiple cores.
