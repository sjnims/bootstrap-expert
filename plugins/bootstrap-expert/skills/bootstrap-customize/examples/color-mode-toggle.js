/**
 * Bootstrap 5.3 Color Mode Toggle
 *
 * This script provides a complete implementation for toggling between
 * light, dark, and auto (system preference) color modes.
 */

(() => {
  'use strict';

  // Storage key for persisting user preference
  const STORAGE_KEY = 'theme';

  /**
   * Get the stored theme preference or default to 'auto'
   * @returns {'light' | 'dark' | 'auto'}
   */
  const getStoredTheme = () => localStorage.getItem(STORAGE_KEY) || 'auto';

  /**
   * Store the theme preference
   * @param {'light' | 'dark' | 'auto'} theme
   */
  const setStoredTheme = (theme) => localStorage.setItem(STORAGE_KEY, theme);

  /**
   * Get the preferred theme based on system settings
   * @returns {'light' | 'dark'}
   */
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme && storedTheme !== 'auto') {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  /**
   * Apply the theme to the document
   * @param {'light' | 'dark'} theme
   */
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  };

  /**
   * Update the active state of theme toggle buttons
   * @param {'light' | 'dark' | 'auto'} theme
   */
  const showActiveTheme = (theme) => {
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    if (!btnToActive) return;

    // Remove active state from all buttons
    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    // Set active state on current button
    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');

    // Update the icon if using an icon-based toggle
    if (activeThemeIcon) {
      const activeIcon = btnToActive.querySelector('i, svg, .theme-icon');
      if (activeIcon) {
        activeThemeIcon.className = activeIcon.className;
      }
    }
  };

  // Apply theme immediately to prevent flash
  setTheme(getPreferredTheme());

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme === 'auto') {
      setTheme(getPreferredTheme());
    }
  });

  // Initialize when DOM is ready
  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getStoredTheme());

    // Add click handlers to theme toggle buttons
    document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        setStoredTheme(theme);
        setTheme(theme === 'auto' ? getPreferredTheme() : theme);
        showActiveTheme(theme);
      });
    });
  });
})();

/*
 * HTML Usage Example:
 *
 * <!-- Dropdown Toggle -->
 * <div class="dropdown">
 *   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
 *     <i class="bi bi-circle-half theme-icon-active"></i>
 *     <span class="visually-hidden">Toggle theme</span>
 *   </button>
 *   <ul class="dropdown-menu dropdown-menu-end">
 *     <li>
 *       <button type="button" class="dropdown-item" data-bs-theme-value="light">
 *         <i class="bi bi-sun-fill me-2"></i>Light
 *       </button>
 *     </li>
 *     <li>
 *       <button type="button" class="dropdown-item" data-bs-theme-value="dark">
 *         <i class="bi bi-moon-fill me-2"></i>Dark
 *       </button>
 *     </li>
 *     <li>
 *       <button type="button" class="dropdown-item" data-bs-theme-value="auto">
 *         <i class="bi bi-circle-half me-2"></i>Auto
 *       </button>
 *     </li>
 *   </ul>
 * </div>
 *
 * <!-- Simple Button Group Toggle -->
 * <div class="btn-group" role="group" aria-label="Theme toggle">
 *   <button type="button" class="btn btn-outline-secondary" data-bs-theme-value="light">
 *     <i class="bi bi-sun-fill"></i>
 *   </button>
 *   <button type="button" class="btn btn-outline-secondary" data-bs-theme-value="dark">
 *     <i class="bi bi-moon-fill"></i>
 *   </button>
 *   <button type="button" class="btn btn-outline-secondary" data-bs-theme-value="auto">
 *     <i class="bi bi-circle-half"></i>
 *   </button>
 * </div>
 */
