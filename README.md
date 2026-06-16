# Brainmaster

Brainmaster is a historical PHP/MySQL browser game for testing short-term memory. The project was built as a university/coursework web application and combines two memory games with a lightweight registration flow, survey screens, and basic behaviour tracking for later UX analysis.

> Status: archived / historical reference.
>
> This codebase is not maintained and should not be deployed publicly without a full rewrite and security review.

## What it does

Brainmaster presents users with visual memory challenges designed to be more playful than traditional text-based memory tests:

- path memory: remember and repeat a sequence of highlighted cells in a two-dimensional grid
- colour challenge: remember both the position and colour of elements in a grid
- guest and registered-user flows
- result screens and survey/feedback collection
- simple statistics about registration, game completion, control preferences, and survey behaviour

The original project explored how interface design, registration friction, mouse/keyboard controls, and visual presentation affect engagement with memory-testing applications.

## Technology stack

- PHP
- MySQL / MariaDB
- HTML / CSS
- JavaScript
- jQuery and jQuery UI
- PHPMailer

## Repository structure

```text
.
├── index.php                 # Entry point, session initialisation, game bootstrap
├── game.php                  # Main game UI shell
├── config.php                # Database/session bootstrap for the legacy app
├── *_log.php                 # Game/result/statistics endpoints
├── *_reg.php                 # Registration/login related handlers
├── *_survey.php              # Survey related handlers
├── js/                       # Browser game logic and UI scripts
├── css/                      # Game stylesheets
├── img/                      # UI graphics and game assets
├── icon/                     # Browser/OS/device icons used by legacy stats UI
├── font/                     # Bundled display fonts
├── db_init.example.sql       # Sanitized example schema/data
└── .env.example              # Example SMTP configuration values
```

## Local setup

This project targets an old PHP runtime and legacy coding style. Use an isolated local VM/container if you need to inspect it.

1. Install a PHP + MySQL stack.
2. Create a database named `brainmaster`.
3. Import the sanitized example schema:

   ```bash
   mysql -u root -p brainmaster < db_init.example.sql
   ```

4. Configure database access in `config.php`.
5. Copy `.env.example` to your local environment management system if you modernise the mail code. The legacy code does not currently load `.env` automatically.
6. Serve the folder with a PHP-capable web server.

Example with PHP's built-in server for local inspection only:

```bash
php -S 127.0.0.1:8080
```

Then open `http://127.0.0.1:8080/`.

## Security notes

This is legacy code and contains patterns that are unsafe for modern production use:

- direct SQL construction from request/session values in parts of the app
- old password-handling patterns
- legacy session and mail handling
- no dependency management or automated test suite
- historical analytics and tracking snippets
- configuration stored directly in PHP files

The repository has been sanitized so current HEAD does not contain real database dumps, SMTP passwords, webalizer statistics, or user email lists. Old git history may still contain removed data unless history is rewritten.

If any credential that previously appeared in this repository was real, rotate it.

## Suggested modernisation path

If this project is ever revived, treat it as a product rewrite rather than a small maintenance update:

1. Move configuration to environment variables.
2. Replace raw SQL with parameterised queries or an ORM.
3. Replace legacy password storage with `password_hash()` / `password_verify()`.
4. Add CSRF protection and server-side input validation.
5. Remove obsolete analytics snippets.
6. Add automated tests for game result submission and account flows.
7. Rebuild the front end with a modern bundler and accessible interaction model.

## License

No explicit license file is included. Treat the code as all rights reserved unless a license is added by the repository owner.
