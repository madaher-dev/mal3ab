export default function ({ $strapi, redirect, app }) {
  if ($strapi.user) {
    redirect(app.localePath('/'))
  }
}
