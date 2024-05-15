import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

console.log('Hello from Functions!')

interface Notification {
  id: string
  user_id: string
  body: string
}

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE'
  table: string
  record: Notification
  schema: 'public'
  old_record: null | Notification
}

const supabase = createClient(
  'https://zimdjixojoxmabrmwims.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbWRqaXhvam94bWFicm13aW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NTE1ODIsImV4cCI6MjAzMTMyNzU4Mn0.F3sOFMfKmPUD7ifKjUK5kCtVrUvU4JG4lw5zdF-oI8M'
)

Deno.serve(async (req) => {
  const payload: WebhookPayload = await req.json()
  console.log('==========================Start-Log-Massage========================================');
  console.log('',payload);
  console.log('==============================End-Log-Massage======================================');
  // const { data } = await supabase
  //   .from('profiles')
  //   .select('expo_push_token')
  //   .eq('id', payload.record.user_id)
  //   .single()

  try{const res = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: "ExponentPushToken[4_XWyeDXb8iNNwOEH-4EuZ]",
      sound: 'default',
      body: "payload.record.body",
      title:"helooo"
    }),
  })

  console.log('==========================Start-Log-Massage========================================');
  console.log('res',JSON.stringify(res));
  console.log('==============================End-Log-Massage======================================');

  return new Response(JSON.stringify(res), {
    headers: { 'Content-Type': 'application/json' },
  })
}
catch(e){
  console.log('........',e)
}

})