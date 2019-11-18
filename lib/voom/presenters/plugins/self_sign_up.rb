module Voom
  module Presenters
    module Plugins
      module SelfSignUp

        module WebClientComponents
          def render_header_self_sign_up(pom, render:)
            view_dir = File.join(__dir__, 'self_sign_up')
            render.call :erb, :self_sign_up_header, views: view_dir
          end
        end

      end
    end
  end
end
