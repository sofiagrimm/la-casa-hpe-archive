/**
 * La Casa HP&E Archive — Supabase Client
 * Single initialization point for all pages.
 * Uses the public anon key (safe for frontend).
 */
(function () {
    'use strict';

    var SUPABASE_URL = 'https://bdvaqrzsnzjnlufvkxqa.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdmFxcnpzbnpqbmx1ZnZreHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMDE4MzksImV4cCI6MjA5MTc3NzgzOX0.a9pQyOH0kNRm5K_8NcLT40QkrUt0iCaLUrUtKn0WV_w';

    if (!window.supabase || !window.supabase.createClient) {
        console.warn('Supabase JS library not loaded. Ensure the CDN script tag appears before supabase-init.js.');
        return;
    }

    window.sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
