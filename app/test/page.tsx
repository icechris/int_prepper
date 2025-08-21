"use client";

export default function TestPage() {
  console.log("TEST VAR:", process.env.NEXT_PUBLIC_TEST_VAR);
  console.log("VAPI WORKFLOW:", process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID);

  return (
    <div>
      Open browser devtools → Console, check the logs.
    </div>
  );
}
