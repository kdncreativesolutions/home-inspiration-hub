<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep Adorini Homes as one scrolling content route with anchor navigation because the supplied brief explicitly requires a single page.
- Keep business copy and photo references in a shared content module; reusable presentation sections consume it so content edits remain centralised.
- Import site photography through asset pointers rather than hotlinking the reference website, so images stay managed with the project.
- Keep the enquiry handler explicitly client-side and demonstration-only until email delivery is connected; never show a sent confirmation without actual delivery.
