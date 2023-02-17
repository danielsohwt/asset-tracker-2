import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjA4MDg2ODY2LCJleHAiOjE5MjM2NjI4NjZ9.VhREC_QelWdkSLOFS2YB-mnH35Xgrp5jJGJxqK7y0H8";
const SUPABASE_URL = "https://mqsjnbfkutozrnrwjfja.supabase.co";
export const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_KEY);
